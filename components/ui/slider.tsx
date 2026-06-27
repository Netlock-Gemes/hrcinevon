"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min],
    [value, defaultValue, min],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "group relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="
          relative
          h-1.5
          w-full
          grow
          overflow-hidden
          rounded-full
          bg-white/15
          transition-all
          duration-200
          group-hover:h-2
        "
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="
            absolute
            h-full
            rounded-full
            bg-red-600
          "
        />
      </SliderPrimitive.Track>

      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className="
            block
            h-5
            w-5
            rounded-full
            border-2
           bg-white
border-red-600
            shadow-lg
            transition-all
            duration-200
            hover:scale-110
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-red-500
            disabled:pointer-events-none
            disabled:opacity-50
          "
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
