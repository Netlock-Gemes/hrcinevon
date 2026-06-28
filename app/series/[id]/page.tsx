import { notFound } from "next/navigation";

import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { AboutSection } from "@/components/media/AboutSection";
import { CastSection } from "@/components/media/CastSection";
import { MediaBackdrop } from "@/components/media/MediaBackdrop";
import { PageDivider } from "@/components/media/PageDivider";

import { getMediaDetails } from "@/lib/services/media";
import { EpisodesSection } from "@/components/media/EpisodesSection";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function SeriesPage({ params }: Props) {
  const { id } = await params;

  const response = await getMediaDetails("series", id);

  if (!response.meta) {
    notFound();
  }

  return (
    <>
      <FloatingNavbar />

      <MediaBackdrop media={response.meta} />

      <AboutSection media={response.meta} />

      <PageDivider />

      <CastSection media={response.meta} />

      <PageDivider />

      <EpisodesSection media={response.meta} />

      <PageDivider />
    </>
  );
}
