import {
  CatalogResponse,
  MetaResponse,
  StreamResponse,
  MediaType,
} from "./types/media";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function getCatalog(
  type: MediaType,
  catalogId: string,
): Promise<CatalogResponse> {
  return fetcher<CatalogResponse>(
    `${API_BASE_URL}/catalog/${type}/${catalogId}.json`,
  );
}

export async function getMeta(
  type: MediaType,
  id: string,
): Promise<MetaResponse> {
  return fetcher<MetaResponse>(`${API_BASE_URL}/meta/${type}/${id}.json`);
}

export async function getStreams(
  type: MediaType,
  id: string,
): Promise<StreamResponse> {
  return fetcher<StreamResponse>(`${API_BASE_URL}/stream/${type}/${id}.json`);
}
