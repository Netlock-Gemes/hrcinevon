import { notFound } from "next/navigation";

import { getMediaDetails } from "@/lib/services/media";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { MediaBackdrop } from "@/components/media/MediaBackdrop";
import { PageDivider } from "@/components/media/PageDivider";
import { AboutSection } from "@/components/media/AboutSection";
import { CastSection } from "@/components/media/CastSection";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params;

  const response = await getMediaDetails("movie", id);

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
    </>
  );
}
