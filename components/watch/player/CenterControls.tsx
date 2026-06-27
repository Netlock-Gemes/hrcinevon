"use client";

import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";

import { usePlayerContext } from "./PlayerContext";

export function CenterControls() {
  const { playing, togglePlay, seek } = usePlayerContext();

  return (
    <div
      className="
      absolute
      inset-0
      z-20
      flex
      items-center
      justify-center
      gap-8
      pointer-events-none
    "
    >
      <button
        onClick={() => seek(-10)}
        className="
        pointer-events-auto
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-black/40
        backdrop-blur-xl
        transition
        hover:scale-110
      "
      >
        <RotateCcw className="size-8" />
      </button>

      <button
        onClick={togglePlay}
        className="
        pointer-events-auto
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        bg-white
        text-black
        transition
        hover:scale-110
      "
      >
        {playing ? (
          <Pause className="size-12 fill-current" />
        ) : (
          <Play className="size-12 fill-current ml-1" />
        )}
      </button>

      <button
        onClick={() => seek(10)}
        className="
        pointer-events-auto
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-black/40
        backdrop-blur-xl
        transition
        hover:scale-110"
      >
        <RotateCw className="size-8" />
      </button>
    </div>
  );
}
