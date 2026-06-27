/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import { Media } from "@/lib/types/media";
import { MediaInfo } from "./MediaInfo";

interface MediaBackdropProps {
  media: Media;
}

export function MediaBackdrop({ media }: MediaBackdropProps) {
  const [backgroundError, setBackgroundError] = useState(false);

  return (
    <section className="relative h-[88vh] min-h-140 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <img
        src={backgroundError ? media.poster : media.background}
        alt={media.name}
        loading="eager"
        onError={() => setBackgroundError(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

      <MediaInfo media={media} />
    </section>
  );
}
