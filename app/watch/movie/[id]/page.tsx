import { notFound } from "next/navigation";
import { getMediaDetails } from "@/lib/services/media";
import { PlayerShell } from "@/components/watch/PlayerShell";
import { PlayerContainer } from "@/components/watch/player";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FeaturedLogo } from "@/components/media/FeaturedLogo";
import { Star } from "lucide-react";

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
        <PlayerContainer
          id={id}
          name={response.meta.name}
          type="movie"
        />

        <div className="absolute bottom-30 p-7 max-w-2xl">
          <SectionContainer className="-mt-72 relative z-20 pb-20">
            <div className="max-w-3xl">
              <FeaturedLogo logo={response.meta.logo} title={response.meta.name} />

              <div className="mb-5 flex flex-wrap gap-3 text-sm">
                {response.meta.imdbRating && (
                  <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-yellow-300">
                    <Star className="mr-1 inline size-3 fill-current" />
                    {response.meta.imdbRating}
                  </span>
                )}

                {response.meta.releaseInfo && <span>{response.meta.releaseInfo}</span>}

                {response.meta.runtime && <span>{response.meta.runtime}</span>}

                {response.meta.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-white/10 px-3 py-1"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="mb-8 text-lg leading-8 text-white/80">
                {response.meta.description}
              </p>
            </div>
          </SectionContainer>
        </div>
      </div>
    </PlayerShell>
  );
}
