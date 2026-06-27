"use client";

import { Check } from "lucide-react";

import { Stream } from "@/lib/types/media";

interface Props {
  streams: Stream[];
  current: Stream;
  open: boolean;
  onClose: () => void;
  onChange: (stream: Stream) => void;
}

export function QualityMenu({
  streams,
  current,
  open,
  onClose,
  onChange,
}: Props) {
  if (!open) return null;

  return (
    <div className="absolute bottom-15 right-0 w-64 overflow-hidden rounded-lg border border-white/10 bg-neutral-900/80 backdrop-blur-2xl shadow-2xl">
      <div className="border-b border-white/10 p-4 text-sm font-semibold">
        Quality
      </div>
      {streams.map((stream) => (
        <button
          key={stream.url}
          onClick={() => {
            onChange(stream);
            onClose();
          }}
          className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-red-600/20"
        >
          <span>{stream.name.replace("HRWells' Stremio ", "")}</span>

          {current.url === stream.url && (
            <Check className="size-4 text-red-500" />
          )}
        </button>
      ))}
    </div>
  );
}
