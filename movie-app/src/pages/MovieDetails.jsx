import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/MovieDetails.css";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function MovieDetails() {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const [movieIsFavourited, setFavouritedState] = useState(null);
  const endpoint = 'https://api.themoviedb.org/3/movie/';
  const baseBackdropUrl = "https://image.tmdb.org/t/p/original/";
  const basePosterUrl = "http://image.tmdb.org/t/p/w342";
  const favouritedMovies = { ...localStorage };

  const addToFavouritesSvg = (
    <svg className="more-info" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="400" cy="400" r="400" fill="#D3D3DD" opacity="0.5"></circle>
        <path d="M200,400h200M400,400h200M400,400v200M400,400V200" stroke="#FFFFFF" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="133.3333" fill="none"></path>
      </g>
    </svg>)

  const addedToFavouritesSvg = (
    <svg className="more-info" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="400" cy="400" r="400" fill="#ffb525"></circle>
        <path d="M200,400l141.42,141.42,282.81-282.84" stroke="#fff" stroke-width="66.67" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
      </g>
    </svg>)

  const play = (
    <svg className="more-info" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <polygon points="292.8,229.6 292.8,555.9 598.4,392.8" fill="#FFFFFF"></polygon>
        <path d="M400,0.6C179.1,0.6,0,179.4,0,400s179.1,399.4,400,399.4S800,620.6,800,400S620.9,0.6,400,0.6z M288.3,229.6l305.7,163.2L288.3,555.9V229.6z" fill="#FC4A78"></path>
      </g>
    </svg>)

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`
      );
      const movieData = await response.json();
      console.log(movieData);
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

  // function to make the url for trailer
  const openTrailer = async (movieId) => {
    try {
      const response = await fetch(`${endpoint}${movieId}/videos?api_key=${API}`);
      const json = await response.json();
      console.log(json.results);
      const trailers = json.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailers.length > 0) {
        const trailerUrl = `https://www.youtube.com/watch?v=${trailers[0].key}`;
        window.open(trailerUrl, '_blank');
      } else {
        console.log('No trailer was found for this movie.');
      }
    } catch (error) {
      console.log('Error fetching trailer:', error);
    }
  };

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
          <div className="backdrop-container">
            <div className="gradient-overlay"></div>
            <img
              src={`${baseBackdropUrl}${movie.backdrop_path}`}
              alt={movie.title}
              className="movie-backdrop"
            />
          </div>
          <div className="movie-details-content">
            <div className="favourites-and-play">
              <button className="play-button" onClick={() => openTrailer(movie.id)}>{play}</button>
              <button
                onClick={() => {
                  toggleFavourites(movie);
                }}
                className="favourites-button"
              >
                {movieIsFavourited ? addedToFavouritesSvg : addToFavouritesSvg}
              </button>
              <p className="rating">{`${Math.round((movie.vote_average) * 10)}%`}</p>
            </div>
            <div>
              <h1>{movie.title}</h1>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
