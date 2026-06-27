"use client";

import { useEffect, useRef, useState } from "react";

export function usePlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const [playing, setPlaying] = useState(false);

  const [showUI, setShowUI] = useState(true);

  const [loading, setLoading] = useState(true);

  const [duration, setDuration] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const [volume, setVolume] = useState(1);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const video = videoRef.current;

      if (!video) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();

          togglePlay();

          break;

        case "ArrowLeft":
          seek(-10);

          break;

        case "ArrowRight":
          seek(10);

          break;

        case "KeyM":
          video.muted = !video.muted;

          break;

        case "KeyF":
          if (containerRef.current) {
            toggleFullscreen(containerRef.current);
          }

          break;
      }

      resetHideTimer();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [resetHideTimer]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);

    const updateDuration = () => setDuration(video.duration);

    const onWaiting = () => setLoading(true);

    const onCanPlay = () => setLoading(false);

    const onPlay = () => setPlaying(true);

    const onPause = () => setPlaying(false);

    video.addEventListener("timeupdate", updateTime);

    video.addEventListener("durationchange", updateDuration);

    video.addEventListener("waiting", onWaiting);

    video.addEventListener("canplay", onCanPlay);

    video.addEventListener("play", onPlay);

    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", updateTime);

      video.removeEventListener("durationchange", updateDuration);

      video.removeEventListener("waiting", onWaiting);

      video.removeEventListener("canplay", onCanPlay);

      video.removeEventListener("play", onPlay);

      video.removeEventListener("pause", onPause);
    };
  }, []);

  function resetHideTimer() {
    setShowUI(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      if (playing) {
        setShowUI(false);
      }
    }, 2500);
  }

  function togglePlay() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function seek(seconds: number) {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime += seconds;
  }

  function changeVolume(value: number) {
    const video = videoRef.current;

    if (!video) return;

    video.volume = value;

    setVolume(value);
  }

  async function toggleFullscreen(element: HTMLElement) {
    if (containerRef.current!) {
      await element.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }

  return {
    videoRef,

    containerRef,

    playing,

    loading,

    duration,

    currentTime,

    volume,

    showUI,

    resetHideTimer,

    togglePlay,

    seek,

    changeVolume,

    toggleFullscreen,
  };
}
