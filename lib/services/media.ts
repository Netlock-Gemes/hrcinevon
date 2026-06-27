import { getCatalog, getMeta, getStreams, searchCatalog } from "../api";
import { CATALOGS } from "../constants";
import { MediaType } from "../types/media";

export async function getHomeData() {
  const [popularMovies, latestMovies, popularSeries, latestSeries] =
    await Promise.all([
      getCatalog("movie", CATALOGS.MOVIES.POPULAR),
      getCatalog("movie", CATALOGS.MOVIES.LATEST),
      getCatalog("series", CATALOGS.SERIES.POPULAR),
      getCatalog("series", CATALOGS.SERIES.LATEST),
    ]);

  return {
    popularMovies: popularMovies.metas,
    latestMovies: latestMovies.metas,
    popularSeries: popularSeries.metas,
    latestSeries: latestSeries.metas,
  };
}

export async function getMediaDetails(type: MediaType, id: string) {
  return getMeta(type, id);
}

export async function getMediaStreams(type: MediaType, id: string) {
  return getStreams(type, id);
}

export async function searchMedia(query: string) {
  const [movies, series] = await Promise.all([
    searchCatalog("movie", query),
    searchCatalog("series", query),
  ]);

  return [...movies.metas, ...series.metas];
}
