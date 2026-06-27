"use client";

import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { MediaSlider } from "./MediaSlider";
import { usePlayerContext } from "./PlayerContext";

export function VolumeSlider() {
  const { volume, changeVolume } = usePlayerContext();

  const previousVolume = useRef(1);

  const dragging = useRef(false);

  const [expanded, setExpanded] = useState(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  function open() {
    if (timeout.current) clearTimeout(timeout.current);
    setExpanded(true);
  }

  function close() {
    if (dragging.current) return;

    timeout.current = setTimeout(() => {
      setExpanded(false);
    }, 250);
  }

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <div
      className="flex items-center"
      onMouseEnter={open}
      onMouseLeave={close}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();

          if (volume === 0) {
            changeVolume(previousVolume.current);
          } else {
            previousVolume.current = volume;
            changeVolume(0);
          }
        }}
        className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {volume === 0 ? (
          <VolumeX className="size-6" />
        ) : volume < 0.5 ? (
          <Volume1 className="size-6" />
        ) : (
          <Volume2 className="size-6" />
        )}
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-out
          px-2
          ${expanded ? "ml-2 w-25 opacity-100" : "ml-0 w-0 opacity-0"}
        `}
      >
        <MediaSlider
          value={volume * 100}
          onDragStart={() => {
            dragging.current = true;
            open();
          }}
          onDragEnd={() => {
            dragging.current = false;
            close();
          }}
          onChange={(value) => {
            if (value > 0) previousVolume.current = value / 100;
            changeVolume(value / 100);
          }}
        />
      </div>
    </div>
  );
}
