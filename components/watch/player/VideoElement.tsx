"use client";

import { useEffect } from "react";

import { usePlayerContext } from "./PlayerContext";

interface Props {
  src: string;
}

export function VideoElement({ src }: Props) {
  const { videoRef, loading } = usePlayerContext();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.src = src;

    video.load();
  }, [src, videoRef]);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      preload="auto"
      className={`absolute inset-0 h-full w-full object-contain bg-black transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
    />
  );
}
