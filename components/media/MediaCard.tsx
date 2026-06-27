/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Star } from "lucide-react";

import { Media } from "@/lib/types/media";

interface MediaCardProps {
  media: Media;
}

export function MediaCard({ media }: MediaCardProps) {
  return (
    <Link
      href={`/${media.type}/${media.id}`}
      className="group relative block shrink-0"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-300 group-hover:border-white/15">
        
        {/* IMAGE ONLY HOVER SCALE */}
        <img
          src={media.poster}
          alt={media.name}
          className="
            aspect-2/3
            h-auto
            w-45
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

        <div className="absolute inset-x-0 bottom-0 p-3">
          <h3 className="line-clamp-1 text-sm font-semibold">
            {media.name}
          </h3>

          <div className="mt-1 flex items-center justify-between">
            <span className="text-xs text-white/60">
              {media.releaseInfo}
            </span>

            {media.imdbRating && (
              <div className="flex items-center gap-1">
                <Star className="size-3 fill-current text-yellow-400" />
                <span className="text-xs text-white/80">
                  {media.imdbRating}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}