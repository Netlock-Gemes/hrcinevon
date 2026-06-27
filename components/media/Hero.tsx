/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Play, Info, Star } from "lucide-react";

import { Media } from "@/lib/types/media";
import { SectionContainer } from "../layout/SectionContainer";
import { FeaturedLogo } from "./FeaturedLogo";
import { formatRuntime } from "@/lib/utils/formatRuntime";

interface HeroProps {
  media: Media;
}

export function Hero({ media }: HeroProps) {
  return (
    <section className="relative h-[88vh] min-h-190 overflow-hidden">
      <img
        src={media.background}
        alt={media.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/65 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/15 to-transparent" />

      {/* Top vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />

      <div className="relative flex h-full items-end">
        <SectionContainer>
          <div className="max-w-2xl space-y-5 pb-28">
            <FeaturedLogo
              logo={media.logo}
              title={media.name}
              className="max-h-30 md:max-h-40"
            />

            <div className="flex flex-wrap gap-3 text-sm items-center">
              {media.imdbRating && (
                <span className="flex items-center gap-1 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-yellow-300">
                  <Star className="size-3.5 fill-current" />
                  {media.imdbRating}
                </span>
              )}

              {media.releaseInfo && <span>{media.releaseInfo}</span>}

              {media.runtime && <span>{formatRuntime(media.runtime)}</span>}

              <div className="flex items-center flex-wrap gap-3">
                {media.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-white/10 px-3 py-1"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <p className="max-w-xl text-sm md:text-base font-semibold leading-snug line-clamp-3 text-white/85">
              {media.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${media.type}/${media.id}/watch`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
              >
                <Play className="size-4 md:size-5 fill-current" />
                Watch Now
              </Link>

              <Link
                href={`/${media.type}/${media.id}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm md:text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                <Info className="size-4 md:size-5 text-[#fbbf24]" />
                More Info
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
