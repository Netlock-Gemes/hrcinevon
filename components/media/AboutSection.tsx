import { Media } from "@/lib/types/media";
import { SectionContainer } from "../layout/SectionContainer";

interface AboutSectionProps {
  media: Media;
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="flex items-start justify-between gap-6 border-b border-white/5 py-4 last:border-none">
      <span className="text-sm text-white/45">{label}</span>

      <span className="text-right text-sm text-white/85">{value}</span>
    </div>
  );
}

export function AboutSection({ media }: AboutSectionProps) {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[2fr_380px]">
        {/* About */}
        <div>
          <h2 className="mb-5 text-2xl font-semibold">
            <span className="mr-1 text-[#fbbf24]">|</span>
            About
          </h2>

          <p className="max-w-3xl leading-relaxed text-white/75">
            {media.description}
          </p>
        </div>

        {/* Details */}
        <div className="rounded-3xl border border-white/8 bg-white/5 p-7 backdrop-blur-xl">
          <h3 className="mb-3 text-xl font-semibold">
            <span className="mr-1 text-[#fbbf24]">|</span>
            Details
          </h3>

          <DetailRow label="IMDb Rating" value={media.imdbRating} />

          <DetailRow label="Release" value={media.releaseInfo} />

          <DetailRow label="Runtime" value={media.runtime} />

          <DetailRow label="Genres" value={media.genres?.join(", ")} />
        </div>
      </div>
    </SectionContainer>
  );
}
