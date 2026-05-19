export async function fetchMovies() {
  const response = await fetch('https://reactnative.dev/movies.json');
  if (!response.ok) {
    throw new Error('Falha ao carregar os filmes');
  }
  const json = await response.json();
  return json.movies ?? [];
}
