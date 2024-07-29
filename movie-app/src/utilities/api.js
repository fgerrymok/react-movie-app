const API = import.meta.env.VITE_MOVIE_API_KEY;

async function callAPI() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API}`
  );

  const data = await response.json();
  const movieData = data.results;
  return movieData;
}

export default callAPI;
