"use client";

import { Media, Stream } from "@/lib/types/media";

import { PlayerProvider, usePlayerContext } from "./PlayerContext";

import { VideoElement } from "./VideoElement";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { MediaOverlay } from "./MediaOverlay";

interface InnerProps {
  media: Media;
  stream: Stream;
  streams: Stream[];
  onStreamChange: (stream: Stream) => void;
}

function InnerPlayer({ media, stream, streams, onStreamChange }: InnerProps) {
  const { showUI, resetHideTimer, containerRef, togglePlay, toggleFullscreen } = usePlayerContext();

  return (
    <div
      ref={containerRef}
      onMouseMove={resetHideTimer}
      onClick={togglePlay}
      onDoubleClick={() => toggleFullscreen(containerRef.current!)}
      className={`fixed inset-0 overflow-hidden bg-black transition-all duration-300 ${showUI ? "cursor-default" : "cursor-none"}`}
    >
      <VideoElement src={stream.url} backdrop={media.background} />

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/70" />

        <TopBar title={media.name} />

        <MediaOverlay media={media} />

        <BottomBar
          streams={streams}
          current={stream}
          onStreamChange={onStreamChange}
        />
      </div>
    </div>
  );
}

interface Props {
  media: Media;
  stream: Stream;
  streams: Stream[];
  onStreamChange: (stream: Stream) => void;
}
export function Player({ media, stream, streams, onStreamChange }: Props) {
  return (
    <PlayerProvider>
      <InnerPlayer
        media={media}
        stream={stream}
        streams={streams}
        onStreamChange={onStreamChange}
      />
    </PlayerProvider>
  );
}
