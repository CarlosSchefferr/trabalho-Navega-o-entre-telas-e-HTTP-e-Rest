const MOVIES_API_URL = 'https://reactnative.dev/movies.json';

export async function fetchMovies() {
  const response = await fetch(MOVIES_API_URL);
  if (!response.ok) {
    throw new Error(`Falha ao carregar os filmes: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  return json.movies ?? [];
}
