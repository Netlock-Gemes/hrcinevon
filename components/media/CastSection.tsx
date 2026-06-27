import { Media } from "@/lib/types/media";
import { SectionContainer } from "../layout/SectionContainer";

interface CastSectionProps {
  media: Media;
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function CastSection({ media }: CastSectionProps) {
  if (!media.cast?.length) return null;

  return (
    <SectionContainer className="mb-10">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="mr-1 text-[#fbbf24]">|</span>
        Cast
      </h2>

      <div className="flex gap-5 overflow-x-auto scrollbar-none pb-2">
        {media.cast.map((person) => (
          <div
            key={person}
            className="flex min-w-24 flex-col items-center gap-3"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold backdrop-blur-md transition hover:bg-white/10">
              {initials(person)}
            </div>

            <p className="text-center text-sm text-white/75">{person}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
