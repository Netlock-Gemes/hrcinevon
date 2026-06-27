"use client";

import { Search } from "lucide-react";

interface SearchTriggerProps {
  onClick: () => void;
}

export function SearchTrigger({ onClick }: SearchTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md transition-all hover:bg-white/10 cursor-text"
    >
      <Search size={16} />

      <span className="hidden sm:inline">Search</span>

      <kbd className="ml-2 hidden rounded border border-white/10 px-1.5 py-0.5 text-xs text-white/50 md:inline">
        Ctrl K
      </kbd>
    </button>
  );
}
