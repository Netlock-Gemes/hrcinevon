export function formatEpisode(episode: number) {
  return `Episode ${episode}`;
}

export function formatReleaseDate(date?: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
