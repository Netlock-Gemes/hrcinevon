import { notFound } from "next/navigation";
import { getMediaDetails } from "@/lib/services/media";
import { PlayerShell } from "@/components/watch/PlayerShell";
import { PlayerContainer } from "@/components/watch/player";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function WatchMoviePage({ params }: Props) {
  const { id } = await params;

  const response = await getMediaDetails("movie", id);

  if (!response.meta) {
    notFound();
  }

  return (
    <PlayerShell>
      <div className="mx-auto w-full h-screen relative">
        <PlayerContainer media={response.meta} />
      </div>
    </PlayerShell>
  );
}
