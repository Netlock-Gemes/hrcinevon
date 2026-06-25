import { ChevronRight } from "lucide-react";

import { Media } from "@/lib/types/media";
import { SectionContainer } from "./SectionContainer";
import { MediaCarousel } from "./MediaCarousel";

interface MediaRowProps {
  title: string;
  items: Media[];
}

export function MediaRow({ title, items }: MediaRowProps) {
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <SectionContainer className="mb-4 flex items-center gap-2">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <ChevronRight className="size-5 text-white/50" />
      </SectionContainer>

      <div className="overflow-x-auto scrollbar-none">
        <MediaCarousel items={items} />
      </div>
    </section>
  );
}
