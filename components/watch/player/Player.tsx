"use client";

import { Stream } from "@/lib/types/media";

import { PlayerProvider, usePlayerContext } from "./PlayerContext";

import { VideoElement } from "./VideoElement";
import { TopBar } from "./TopBar";
import { CenterControls } from "./CenterControls";
import { BottomBar } from "./BottomBar";

interface InnerProps {
  stream: Stream;
  title: string;
}

function InnerPlayer({ stream, title }: InnerProps) {
  const { showUI, resetHideTimer, containerRef, togglePlay, toggleFullscreen } =
    usePlayerContext();

  return (
    <div
      onMouseMove={resetHideTimer}
      ref={containerRef}
      className={`fixed inset-0 bg-black overflow-hidden transition-all duration-300 ${showUI ? "cursor-default" : "cursor-none"}`}
    >
      <VideoElement src={stream.url} />
      <TopBar title={title} />
      <CenterControls />
      <BottomBar />
      <div
        onClick={togglePlay}
        onDoubleClick={() => toggleFullscreen(containerRef.current!)}
        className={`
        absolute
        inset-0
        transition-opacity
        duration-300
        ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/70" />
      </div>
    </div>
  );
}

interface Props {
  stream: Stream;
  title: string;
}

export function Player({ stream, title }: Props) {
  return (
    <PlayerProvider>
      <InnerPlayer stream={stream} title={title} />
    </PlayerProvider>
  );
}
