"use client";

import { MediaSlider } from "./MediaSlider";
import { usePlayerContext } from "./PlayerContext";

export function ProgressBar() {
  const { currentTime, duration, videoRef } = usePlayerContext();

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  function handleSeek(value: number) {
    if (!videoRef.current || duration <= 0) return;

    videoRef.current.currentTime = (value / 100) * duration;
  }

  return (
    <MediaSlider
      value={progress}
      onChange={handleSeek}
    />
  );
}