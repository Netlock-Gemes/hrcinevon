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
      className="group block shrink-0 focus-visible:outline-none"
    >
      <article className="relative overflow-hidden rounded-md border border-white/8 bg-card transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        {/* Poster */}
        <img
          src={media.poster}
          alt={media.name}
          className="aspect-2/3 w-34 md:w-44 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />

        {/* Hover dark overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-black/5" />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="line-clamp-1 text-[15px] font-semibold tracking-tight text-white">
            {media.name}
          </h3>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-white/60">{media.releaseInfo}</span>

            {media.imdbRating && (
              <div className="flex items-center gap-1 rounded-full border border-yellow-500/20 bg-black/50 px-2 py-1 backdrop-blur-md">
                <Star className="size-3 fill-current text-yellow-400" />

                <span className="text-xs font-medium text-white/90">
                  {media.imdbRating}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
