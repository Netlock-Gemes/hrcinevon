export type MediaType = "movie" | "series";

export interface Video {
  id: string;

  title: string;

  season: number;

  episode: number;

  overview: string;

  released: string;

  thumbnail: string;

  imdb_id: string;
}

export interface Media {
  id: string;
  type: MediaType;

  name: string;

  poster: string;
  background: string;
  logo: string;

  description?: string;

  year?: number;
  releaseInfo?: string;

  imdb_id?: string;
  moviedb_id?: number;

  imdbRating?: string;

  genres?: string[];

  cast?: string[];

  runtime?: string;

  released?: string;

  videos?: Video[];
}

export interface CatalogResponse {
  metas: Media[];
}

export interface MetaResponse {
  meta: Media;
}

export interface Stream {
  name: string;
  title: string;
  url: string;
}

export interface StreamResponse {
  streams: Stream[];
}
