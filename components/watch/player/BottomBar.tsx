"use client";

import { Maximize, Pause, Play, Volume2 } from "lucide-react";

import { usePlayerContext } from "./PlayerContext";
import { ProgressBar } from "./ProgressBar";

function format(seconds: number) {
  if (!seconds) return "00:00";

  const h = Math.floor(seconds / 3600);

  const m = Math.floor((seconds % 3600) / 60);

  const s = Math.floor(seconds % 60);

  if (h) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function BottomBar() {
  const {
    playing,
    togglePlay,
    currentTime,
    duration,
    volume,
    changeVolume,
    toggleFullscreen,
  } = usePlayerContext();

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-linear-to-t from-black via-black/60 to-transparent px-8 pb-8 pt-20">
      <ProgressBar />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button onClick={togglePlay}>
            {playing ? (
              <Pause className="size-7 fill-current" />
            ) : (
              <Play className="size-7 fill-current" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <Volume2 className="size-5" />

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
            />
          </div>

          <span className="text-sm text-white/70">
            {format(currentTime)} / {format(duration)}
          </span>
        </div>

        <button onClick={() => toggleFullscreen(document.documentElement)}>
          <Maximize className="size-6" />
        </button>
      </div>
    </div>
  );
}
