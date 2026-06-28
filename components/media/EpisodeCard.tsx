/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Play } from "lucide-react";

import { Video } from "@/lib/types/media";
import { formatReleaseDate } from "@/lib/utils/formatEpisode";

interface EpisodeCardProps {
  seriesId: string;
  episode: Video;
}

export function EpisodeCard({ seriesId, episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/series/${seriesId}/watch?video=${encodeURIComponent(episode.id)}`}
      className="group block"
    >
      <article
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/8
          bg-white/[0.03]
          transition-all
          duration-300
          hover:border-white/15
          hover:bg-white/[0.05]
        "
      >
        <div className="grid md:grid-cols-[300px_1fr]">
          <div className="relative overflow-hidden">
            <img
              src={episode.thumbnail}
              alt={episode.title}
              loading="lazy"
              className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
            >
              <div className="rounded-full bg-white p-4 text-black shadow-xl">
                <Play className="ml-1 size-7 fill-current" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6">
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                Episode {episode.episode}
              </span>

              <span className="text-xs text-white/50">
                {formatReleaseDate(episode.released)}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold">{episode.title}</h3>

            <p className="line-clamp-3 text-sm leading-7 text-white/65">
              {episode.overview}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
