"use client";

import { Star } from "lucide-react";

import { FeaturedLogo } from "@/components/media/FeaturedLogo";

import { Media } from "@/lib/types/media";

import { usePlayerContext } from "./PlayerContext";

export function MediaOverlay({ media }: { media: Media }) {
  const { playing } = usePlayerContext();
  return (
    <div
      className={`absolute bottom-30 left-8 z-20 max-w-2xl text-xs transition-all duration-300 ${playing ? "pointer-events-none opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
    >
      <FeaturedLogo
        logo={media.logo}
        title={media.name}
        isSmall
        className="mb-4"
      />

      <div className="mt-3 mb-4 flex flex-wrap gap-3 items-center">
        {media.imdbRating && (
          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300 flex items-center">
            <Star className="mr-1 mb-0.5 inline size-3 fill-current" />

            {media.imdbRating}
          </span>
        )}

        {media.releaseInfo && <span>{media.releaseInfo}</span>}

        {media.runtime && <span>{media.runtime}</span>}

        {media.genres?.map((genre) => (
          <span
            key={genre}
            className="rounded-full bg-white/10 px-3 py-1 text-xs"
          >
            {genre}
          </span>
        ))}
      </div>

      <p className="line-clamp-2 text-base leading-snug text-white/80">
        {media.description}
      </p>
    </div>
  );
}
