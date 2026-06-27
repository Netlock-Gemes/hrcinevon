"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MediaSliderProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export function MediaSlider({
  value,
  onChange,
  className,
  onDragStart,
  onDragEnd,
}: MediaSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);

  function update(clientX: number) {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();

    let percent = ((clientX - rect.left) / rect.width) * 100;

    percent = Math.min(100, Math.max(0, percent));

    onChange(percent);
  }

  useEffect(() => {
    if (!dragging) return;

    const move = (e: PointerEvent) => {
      update(e.clientX);
    };

    const up = () => {
      setDragging(false);
      onDragEnd?.();
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);

      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [dragging]);

  return (
    <div
      className={cn("group flex items-center py-2 select-none", className)}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        ref={trackRef}
        onPointerDown={(e) => {
          e.stopPropagation();
          setDragging(true);
          onDragStart?.();
          update(e.clientX);
        }}
        className="relative h-1 w-full cursor-pointer rounded-full bg-white/15 transition-all duration-200 group-hover:h-1.5"
      >
        {/* Progress */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#fbbf24]"
          style={{
            width: `${value}%`,
          }}
        />

        {/* Thumb */}
        <div
          className={cn(
            `absolute top-1/2 h-3.5 w-3.5 rounded-full border border-yellow-600 bg-white shadow-xl transition-all duration-200 -translate-x-1/2 -translate-y-1/2`,
            dragging ? "scale-125" : "group-hover:scale-110",
          )}
          style={{
            left: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}
