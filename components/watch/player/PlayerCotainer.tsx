"use client";

import { useEffect, useState } from "react";

import { useStream } from "@/lib/hooks/use-stream";

import { Stream } from "@/lib/types/media";

import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { Player } from "./Player";

interface Props {
  id: string;
  name: string;
  type: "movie" | "series";
}

export function PlayerContainer({ id, name, type }: Props) {
  const { streams, loading, error } = useStream(type, id);

  const [stream, setStream] = useState<Stream>();

  useEffect(() => {
    if (streams.length) {
      setStream(streams[0]);
    }
  }, [streams]);

  if (loading) return <LoadingState />;

  if (error) return <ErrorState message={error} />;

  if (!stream) return <ErrorState message="No stream available." />;

  return <Player stream={stream} title={name} />;
}
