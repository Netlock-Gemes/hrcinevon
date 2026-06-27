"use client";

import { useEffect, useState } from "react";

import { getMediaStreams } from "@/lib/services/media";
import { Stream } from "@/lib/types/media";

export function useStream(type: "movie" | "series", id: string) {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);

        const response = await getMediaStreams(type, id);

        if (!mounted) return;

        setStreams(response.streams);
      } catch {
        if (!mounted) return;

        setError("Unable to load streams.");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [type, id]);

  return {
    streams,
    loading,
    error,
  };
}
