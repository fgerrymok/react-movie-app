import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function Subnav() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const basePosterUrl = "http://image.tmdb.org/t/p/w185";

  useEffect(() => {
    async function generateMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${API}`
      );
      const data = await response.json();
      const movieData = data.results;
      setMovies(movieData);
    }
    generateMovies();
  }, [category]);

  function updateCategory(category) {
    setCategory(category);
  }

  return (
    <>
      <button
        onClick={() => {
          updateCategory("popular");
        }}
      >
        Popular
      </button>
      <button
        onClick={() => {
          updateCategory("top_rated");
        }}
      >
        Top Rated
      </button>
      <button
        onClick={() => {
          updateCategory("upcoming");
        }}
      >
        Upcoming
      </button>
      <button
        onClick={() => {
          updateCategory("now_playing");
        }}
      >
        Now Playing
      </button>
      <div className="movies-container">
        {movies &&
          movies.map((movie) => {
            const posterUrl = basePosterUrl + movie.poster_path;

            return (
              <div className="movie-card" key={movie.id}>
                <img src={posterUrl} alt={movie.title} />
                <h3>{movie.title}</h3>
                <Link to={`moviedetails/${movie.id}`}>More Info</Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Subnav;
