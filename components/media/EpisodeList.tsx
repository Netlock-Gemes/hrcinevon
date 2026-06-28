import { Video } from "@/lib/types/media";

import { EpisodeCard } from "./EpisodeCard";

interface EpisodeListProps {
  seriesId: string;
  episodes: Video[];
}

export function EpisodeList({ seriesId, episodes }: EpisodeListProps) {
  return (
    <div className="space-y-5">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} seriesId={seriesId} episode={episode} />
      ))}
    </div>
  );
}
