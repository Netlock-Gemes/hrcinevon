"use client";

import { useState } from "react";

import { useStream } from "@/lib/hooks/use-stream";
import { Media, Stream } from "@/lib/types/media";

import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { Player } from "./Player";

interface Props {
  media: Media;
  streamId?: string;
}

export function PlayerContainer({ media, streamId }: Props) {
  const { streams, loading, error } = useStream(
    media.type,
    streamId ?? media.id,
  );

  const [stream, setStream] = useState<Stream | undefined>();

  const currentStream =
    stream && streams.some((s) => s.url === stream.url) ? stream : streams[0];

  if (loading) return <LoadingState />;

  if (error) return <ErrorState message={error} />;

  if (!currentStream) {
    return <ErrorState message="No stream available." />;
  }

  return (
    <Player
      media={media}
      stream={currentStream}
      streams={streams}
      onStreamChange={setStream}
    />
  );
}
