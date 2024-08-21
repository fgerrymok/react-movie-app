import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import "../styles/Subnav.css";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function Subnav() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [currentHoveredMovieId, setCurrentHoveredMovieId] = useState(null);
  const [favourites, setFavourites] = useContext(Context);
  const basePosterUrl = "http://image.tmdb.org/t/p/w342";
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
    async function generateMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${API}`
      );
      const data = await response.json();
      const movieData = data.results;
      console.log(movieData);
      setMovies(movieData);
    }
    generateMovies();
  }, [category]);

  function updateCategory(category) {
    setCategory(category);
  }

  function toggleFavourites(movie) {
    if (localStorage.getItem(movie.id) === null) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
      setFavourites([...favourites, movie]);
    } else {
      localStorage.removeItem(movie.id);
      const newFavourites = favourites.filter((iteratedMovie) => {
        iteratedMovie !== movie;
      });
      setFavourites(newFavourites);
    }
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
              <div
                className="movie-card"
                key={movie.id}
                onMouseEnter={() => {
                  setCurrentHoveredMovieId(movie.id);
                }}
                onMouseLeave={() => {
                  setCurrentHoveredMovieId(null);
                }}
              >
                <img src={posterUrl} alt={movie.title} />
                <div
                  className={
                    currentHoveredMovieId === movie.id
                      ? "hover-active"
                      : "hover-inactive"
                  }
                >
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <Link to={`moviedetails/${movie.id}`}>More Info</Link>
                  <button
                    onClick={() => {
                      toggleFavourites(movie);
                    }}
                    className="favourites-button"
                  >
                    {favourites.includes(movie) ||
                    localStorage.getItem(movie.id)
                      ? favouritedSvg
                      : notFavouritedSvg}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Subnav;
