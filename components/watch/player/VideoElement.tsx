/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

import { usePlayerContext } from "./PlayerContext";

interface Props {
  src: string;
  backdrop: string;
}

export function VideoElement({ src, backdrop }: Props) {
  const { videoRef, loading } = usePlayerContext();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const previous = video.currentTime;

    video.src = src;

    video.load();

    video.addEventListener(
      "loadedmetadata",
      () => {
        video.currentTime = previous;

        video.play().catch(() => {});
      },
      {
        once: true,
      },
    );

    const ready = () => setLoaded(true);

    video.addEventListener("playing", ready);

    return () => video.removeEventListener("playing", ready);
  }, [src]);

  return (
    <>
      <img
        src={backdrop}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"}`}
      />

      <video
        ref={videoRef}
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 h-full w-full bg-black object-contain transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      />
    </>
  );
}
