import { notFound } from "next/navigation";

import { PlayerShell } from "@/components/watch/PlayerShell";
import { PlayerContainer } from "@/components/watch/player";

import { getMediaDetails } from "@/lib/services/media";

interface Props {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    video?: string;
  }>;
}

export default async function WatchSeriesPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { video } = await searchParams;

  const response = await getMediaDetails("series", id);

  if (!response.meta) {
    notFound();
  }

  return (
    <PlayerShell>
      <div className="relative mx-auto h-screen w-full">
        <PlayerContainer media={response.meta} streamId={video} />
      </div>
    </PlayerShell>
  );
}
