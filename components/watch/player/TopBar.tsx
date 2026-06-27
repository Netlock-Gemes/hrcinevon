"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export function TopBar({ title }: Props) {
  const router = useRouter();

  const iconButton =
    "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95";

  return (
    <div className="absolute inset-x-0 top-0 z-30 bg-linear-to-b from-black/50 via-black/30 to-transparent px-8 pt-6 pb-0">
      <div className="flex items-center justify-between">
        {/* Left */}
        <button
          className={iconButton}
          onClick={(e) => {
            e.stopPropagation();
            router.back();
          }}
        >
          <ArrowLeft className="size-5" />
        </button>

        {/* Center */}
        <div className="pointer-events-none flex-1 px-10 text-center">
          <h1 className="truncate text-base font-medium tracking-wide text-white/90">
            {title}
          </h1>
        </div>

        {/* Right spacer */}
        <div className="h-10 w-10 shrink-0" />
      </div>
    </div>
  );
}
