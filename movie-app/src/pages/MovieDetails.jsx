import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function MovieDetails() {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const baseBackdropUrl = "https://image.tmdb.org/t/p/w1280/";
  const basePosterUrl = "http://image.tmdb.org/t/p/w185";

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`
      );
      const movieData = await response.json();
      setMovie(movieData);
      console.log(movieData);
    }
    getMovie();
  }, []);

  return (
    <div className="movie-details-card">
      {movie && (
        <>
          <img
            src={`${baseBackdropUrl}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="movie-details-content">
            <img
              src={`${basePosterUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <h2>Release Date: {movie.release_date}</h2>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
