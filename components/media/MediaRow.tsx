import { ChevronRight } from "lucide-react";

import { Media } from "@/lib/types/media";
import { MediaCarousel } from "./MediaCarousel";

interface MediaRowProps {
  title: string;
  items: Media[];
}

export function MediaRow({ title, items }: MediaRowProps) {
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <div className="mb-4 flex justify-start items-center gap-2">
        <h2 className="text-lg md:text-xl font-bold tracking-tight select-none">
          <span className="mr-1 text-[#fbbf24]">|</span>
          {title}
        </h2>

        <ChevronRight className="size-5 text-white/50" />
      </div>

      <div className="overflow-x-auto scrollbar-none">
        <MediaCarousel items={items} />
      </div>
    </section>
  );
}
