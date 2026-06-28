"use client";

import { TriangleAlert } from "lucide-react";

interface Props {
  message: string;
}

export function ErrorState({ message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen bg-card">
      <TriangleAlert className="size-12 text-red-400" />

      <p className="text-white/70">{message}</p>
    </div>
  );
}
