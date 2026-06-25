"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Media } from "@/lib/types/media";
import { MediaCard } from "./MediaCard";

interface MediaCarouselProps {
  items: Media[];
}

export function MediaCarousel({ items }: MediaCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    ref.current?.scrollBy({
      left: direction * 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className="group/row relative">
      <button
        onClick={() => scroll(-1)}
        className="
          absolute
          left-4
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-2
          opacity-0
          transition
          group-hover/row:opacity-100
          lg:block
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll(1)}
        className="
          absolute
          right-4
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-2
          opacity-0
          transition
          group-hover/row:opacity-100
          lg:block
        "
      >
        <ChevronRight />
      </button>

      <div
        ref={ref}
        className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          scrollbar-none
        "
      >
        {items.map((item) => (
          <MediaCard key={item.id} media={item} />
        ))}
      </div>
    </div>
  );
}
