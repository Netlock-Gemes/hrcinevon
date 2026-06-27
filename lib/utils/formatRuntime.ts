export function formatRuntime(runtime?: string) {
  if (!runtime) return "";

  const minutes = parseInt(runtime, 10);

  if (Number.isNaN(minutes)) {
    return runtime;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) {
    return `${mins}m`;
  }

  if (mins === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${mins}m`;
}
