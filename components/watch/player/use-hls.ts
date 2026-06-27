"use client";

import { useEffect } from "react";

import Hls from "hls.js";

export function useHls(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
  src: string
) {
  useEffect(() => {
    if (!src.endsWith(".m3u8")) return;

    if (!Hls.isSupported()) return;

    const media = ref.current?.plyr?.media;

    if (!media) return;

    const hls = new Hls();

    hls.loadSource(src);

    hls.attachMedia(media);

    return () => {
      hls.destroy();
    };
  }, [ref, src]);
}