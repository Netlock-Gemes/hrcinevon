"use client";

import { LoaderCircle } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex aspect-video items-center justify-center rounded-3xl border border-white/10 bg-card">
      <LoaderCircle className="size-12 animate-spin text-white/60" />
    </div>
  );
}
