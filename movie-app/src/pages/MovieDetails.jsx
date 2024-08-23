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
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#7275A6" stroke="#7275A6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -1089.000000)" fill="#7275A6"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg> )

  const addedToFavouritesSvg = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#FFB525"></path> </g></svg> )

  const play = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#FC4A78"></path> </g></svg> )

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
          <img
            src={`${baseBackdropUrl}${movie.backdrop_path}`}
            alt={movie.title}
            className="movie-backdrop"
          />
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
              </div>
              <div>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
