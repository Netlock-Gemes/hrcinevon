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
      <main className="-mt-24 relative z-20">
        <MediaRow title="Popular Movies" items={data.popularMovies} />
        <MediaRow title="Latest Movies" items={data.latestMovies} />
        <MediaRow title="Popular Series" items={data.popularSeries} />
        <MediaRow title="Latest Series" items={data.latestSeries} />
      </main>
    </>
  );
}
