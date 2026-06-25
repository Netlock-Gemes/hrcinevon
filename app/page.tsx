import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Hero } from "@/components/Hero";
import { MediaRow } from "@/components/MediaRow";
import { getHomeData } from "@/lib/services/media";

export default async function HomePage() {
  const data = await getHomeData();

  const featured = data.popularMovies[3] ?? data.latestMovies[0];

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
