"use client";

import { useRef } from "react";

import { usePlayerContext } from "./PlayerContext";

export function ProgressBar() {
  const { currentTime, duration, videoRef } = usePlayerContext();

  const barRef = useRef<HTMLDivElement>(null);

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();

    const percent = (e.clientX - rect.left) / rect.width;

    if (videoRef.current) {
      videoRef.current.currentTime = duration * percent;
    }
  }

  const progress = duration === 0 ? 0 : (currentTime / duration) * 100;

  return (
    <div
      ref={barRef}
      onClick={seek}
      className="group relative h-2 cursor-pointer rounded-full bg-white/15"
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-red-600"
        style={{
          width: `${progress}%`,
        }}
      />

      <div
        className="absolute top-1/2 h-5 w-5 rounded-full bg-red-600 -translate-y-1/2 opacity-0 transition group-hover:opacity-100"
        style={{
          left: `calc(${progress}% - 10px)`,
        }}
      />
    </div>
  );
}
