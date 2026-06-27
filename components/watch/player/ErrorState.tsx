"use client";

import { TriangleAlert } from "lucide-react";

interface Props {
  message: string;
}

export function ErrorState({ message }: Props) {
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-3xl border border-red-500/20 bg-card">
      <TriangleAlert className="size-12 text-red-400" />

      <p className="text-white/70">{message}</p>
    </div>
  );
}
