import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/MovieDetails.css";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function MovieDetails() {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const [movieIsFavourited, setFavouritedState] = useState(null);
  const baseBackdropUrl = "https://image.tmdb.org/t/p/w1280/";
  const basePosterUrl = "http://image.tmdb.org/t/p/w185";
  const favouritedMovies = { ...localStorage };

  const notFavouritedSvg = (
    <svg
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"
        fill-rule="nonzero"
      />
    </svg>
  );
  const favouritedSvg = (
    <svg
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
        fill-rule="nonzero"
      />
    </svg>
  );

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`
      );
      const movieData = await response.json();
      setMovie(movieData);
    }
    getMovie();

    Object.keys(favouritedMovies).map((key) => {
      if (id === key) {
        updateState();
      }
    });
  }, [id]);

  function updateState() {
    setFavouritedState(true);
  }

  function toggleFavourites(movie) {
    if (localStorage.getItem(movie.id) === null) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
      setFavouritedState(true);
    } else {
      localStorage.removeItem(movie.id);
      setFavouritedState(false);
    }
  }

  return (
    <div className="movie-details-card">
      {movie && (
        <>
          <img
            src={`${baseBackdropUrl}${movie.backdrop_path}`}
            alt={movie.title}
            className="movie-backdrop"
          />
          <div className="movie-details-content">
            <img
              src={`${basePosterUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <button
                onClick={() => {
                  toggleFavourites(movie);
                }}
                className="favourites-button"
              >
                {movieIsFavourited ? favouritedSvg : notFavouritedSvg}
              </button>
              <h1>{movie.title}</h1>
              <h2>Release Date: {movie.release_date}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
