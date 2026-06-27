"use client";

import { useEffect, useState } from "react";

import { useStream } from "@/lib/hooks/use-stream";
import { Media, Stream } from "@/lib/types/media";

import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { Player } from "./Player";

interface Props {
  media: Media;
}

export function PlayerContainer({ media }: Props) {
  const { streams, loading, error } = useStream(media.type, media.id);

  const [stream, setStream] = useState<Stream>();

  useEffect(() => {
    if (streams.length) {
      setStream(streams[0]);
    }
  }, [streams]);

  if (loading) return <LoadingState />;

  if (error) return <ErrorState message={error} />;

  if (!stream) return <ErrorState message="No stream available." />;

  return (
    <Player
      media={media}
      stream={stream}
      streams={streams}
      onStreamChange={setStream}
    />
  );
}
