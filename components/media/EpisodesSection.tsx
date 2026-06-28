"use client";

import { useMemo, useState } from "react";

import { Media } from "@/lib/types/media";

import { SectionContainer } from "../layout/SectionContainer";
import { SeasonTabs } from "./SeasonTabs";
import { EpisodeList } from "./EpisodeList";

interface EpisodesSectionProps {
  media: Media;
}

export function EpisodesSection({ media }: EpisodesSectionProps) {
  const seasons = useMemo(() => {
    if (!media.videos?.length) return [];

    return [...new Set(media.videos.map((video) => video.season))].sort(
      (a, b) => a - b,
    );
  }, [media.videos]);

  const [currentSeason, setCurrentSeason] = useState(seasons[0] ?? 1);

  if (!media.videos?.length) {
    return null;
  }

  const episodes = media.videos
    .filter((video) => video.season === currentSeason)
    .sort((a, b) => a.episode - b.episode);

  return (
    <SectionContainer className="py-6">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">
          <span className="mr-2 text-[#fbbf24]">|</span>
          Episodes
        </h2>

        <p className="text-white/55">
          Browse every episode from Season {currentSeason}.
        </p>
      </div>

      <SeasonTabs
        seasons={seasons}
        current={currentSeason}
        onChange={setCurrentSeason}
      />

      <EpisodeList seriesId={media.id} episodes={episodes} />
    </SectionContainer>
  );
}
