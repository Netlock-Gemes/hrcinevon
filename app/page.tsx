import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/components/media/Hero";
import { MediaRow } from "@/components/media/MediaRow";
import { getHomeData } from "@/lib/services/media";

export default async function HomePage() {
  const data = await getHomeData();

  const featured = data.latestMovies[0] ?? data.popularMovies[0];

  return (
    <>
      {/* <Navbar /> */}
      <FloatingNavbar />
      <Hero media={featured} />
      <main className="relative z-20 -mt-20 space-y-16 pb-24 max-w-[1800px] px-5 sm:px-6 lg:px-12 flex flex-col mx-auto">
        <MediaRow title="Popular Movies" items={data.popularMovies} />
        <MediaRow title="Latest Movies" items={data.latestMovies} />
        <MediaRow title="Popular Series" items={data.popularSeries} />
        <MediaRow title="Latest Series" items={data.latestSeries} />
      </main>
    </>
  );
}
