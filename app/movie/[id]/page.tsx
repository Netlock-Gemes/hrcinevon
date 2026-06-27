import { notFound } from "next/navigation";

import { getMediaDetails } from "@/lib/services/media";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { MediaBackdrop } from "@/components/media/MediaBackdrop";
import { MediaInfo } from "@/components/media/MediaInfo";

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

      <MediaInfo media={response.meta} />
    </>
  );
}
