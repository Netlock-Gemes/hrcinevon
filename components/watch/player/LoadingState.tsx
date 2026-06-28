"use client";

import { LoaderCircle } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-card">
      <LoaderCircle className="size-12 animate-spin text-white/60" />
    </div>
  );
}
