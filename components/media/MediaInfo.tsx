import { Play, Plus, Star } from "lucide-react";

import { Media } from "@/lib/types/media";
import { SectionContainer } from "../layout/SectionContainer";
import { FeaturedLogo } from "./FeaturedLogo";
import Link from "next/link";

interface MediaInfoProps {
  media: Media;
}

export function MediaInfo({ media }: MediaInfoProps) {
  return (
    <SectionContainer className="-mt-72 relative z-20 pb-20">
      <div className="max-w-3xl">
        <FeaturedLogo logo={media.logo} title={media.name} className="mb-8" />

        <div className="mb-5 flex flex-wrap gap-3 text-sm">
          {media.imdbRating && (
            <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-yellow-300">
              <Star className="mr-1 inline size-3 fill-current" />
              {media.imdbRating}
            </span>
          )}

          {media.releaseInfo && <span>{media.releaseInfo}</span>}

          {media.runtime && <span>{media.runtime}</span>}

          {media.genres?.map((genre) => (
            <span key={genre} className="rounded-full bg-white/10 px-3 py-1">
              {genre}
            </span>
          ))}
        </div>

        <p className="mb-8 text-lg leading-8 text-white/80">
          {media.description}
        </p>

        <div className="flex gap-4">
          <Link
            href={`/${media.type}/${media.id}/watch`}
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 cursor-pointer"
          >
            <Play className="size-5 fill-current" />
            Play
          </Link>

          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md transition hover:bg-white/10">
            <Plus className="size-5" />
            My List
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
