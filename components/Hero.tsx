/* eslint-disable @next/next/no-img-element */
import { Play, Info } from "lucide-react";
import { Media } from "@/lib/types/media";
import { FeaturedLogo } from "./FeaturedLogo";
import { SectionContainer } from "./SectionContainer";

interface HeroProps {
  media: Media;
}

export function Hero({ media }: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-175 overflow-hidden">
      <img
        src={media.background}
        alt={media.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

      <div className="relative flex h-full items-end">
        <SectionContainer>
          <div className="max-w-3xl pb-24">
            <p className="mb-3 text-sm text-white/70">{media.releaseInfo}</p>
            <FeaturedLogo logo={media.logo} title={media.name} />

            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              {media.imdbRating && (
                <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-yellow-300">
                  ★ {media.imdbRating}
                </span>
              )}

              {media.releaseInfo && (
                <span className="text-white/70">{media.releaseInfo}</span>
              )}

              {media.runtime && (
                <span className="text-white/70">{media.runtime}</span>
              )}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105">
                <Play className="size-5 fill-current" />
                Play
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur-md transition-colors hover:bg-white/15">
                <Info className="size-5" />
                Details
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
