import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function MovieDetails() {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`
      );
      const movieData = await response.json();
      setMovie(movieData);
    }
    getMovie();
  }, []);

  return (
    <div class="movie-details">
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
