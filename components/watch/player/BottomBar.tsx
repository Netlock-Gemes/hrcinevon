"use client";

import { Maximize, Pause, Play, RotateCcw, RotateCw, Settings } from "lucide-react";

import { usePlayerContext } from "./PlayerContext";
import { ProgressBar } from "./ProgressBar";
import { Stream } from "@/lib/types/media";
import { useState } from "react";
import { QualityMenu } from "./QualityMenu";
import { VolumeSlider } from "./VolumeSlider";

interface Props {
  streams: Stream[];
  current: Stream;
  onStreamChange: (stream: Stream) => void;
}

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

export function BottomBar({ streams, current, onStreamChange }: Props) {
  const {
    playing,
    togglePlay,
    seek,
    currentTime,
    duration,
    toggleFullscreen,
    containerRef,
  } = usePlayerContext();

  const [settingsOpen, setSettingsOpen] = useState(false);

  const iconButton =
    "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer";

  return (
    <div className="absolute inset-x-0 bottom-0 z-30 bg-linear-to-t from-black/50 via-black/30 to-transparent px-8 pb-5 pt-20">
      <div className="flex items-center gap-5">
        <div className="flex-1">
          <ProgressBar />
        </div>

        <span className="shrink-0 select-none text-sm font-medium tracking-wide text-white/70">
          {format(currentTime)}
          <span className="mx-2 text-white/30">/</span>
          {format(duration)}
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className={iconButton}
            onClick={(e) => {
              e.stopPropagation();
              seek(-10);
            }}
          >
            <RotateCcw className="size-5" />
          </button>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
          >
            {playing ? (
              <Pause className="size-7 fill-current" />
            ) : (
              <Play className="ml-0.5 size-7 fill-current" />
            )}
          </button>

          <button
            className={iconButton}
            onClick={(e) => {
              e.stopPropagation();
              seek(10);
            }}
          >
            <RotateCw className="size-5" />
          </button>

          <VolumeSlider />
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              className={iconButton}
              onClick={(e) => {
                e.stopPropagation();
                setSettingsOpen((v) => !v);
              }}
            >
              <Settings
                className={`size-6 transition-transform duration-300 ${
                  settingsOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            <QualityMenu
              streams={streams}
              current={current}
              open={settingsOpen}
              onClose={() => setSettingsOpen(false)}
              onChange={onStreamChange}
            />
          </div>

          <button
            className={iconButton}
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen(containerRef.current!);
            }}
          >
            <Maximize className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
