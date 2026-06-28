"use client";

import { cn } from "@/lib/utils";

interface SeasonTabsProps {
  seasons: number[];
  current: number;
  onChange: (season: number) => void;
}

export function SeasonTabs({ seasons, current, onChange }: SeasonTabsProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {seasons.map((season) => {
        const active = current === season;

        return (
          <button
            key={season}
            onClick={() => onChange(season)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer",
              active
                ? "border-white/20 bg-white text-black shadow-lg"
                : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10 hover:text-white",
            )}
          >
            Season {season}
          </button>
        );
      })}
    </div>
  );
}
