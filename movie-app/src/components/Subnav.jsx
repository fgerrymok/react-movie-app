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
  const addToFavouritesSvg = (
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#7275A6" stroke="#7275A6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -1089.000000)" fill="#7275A6"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>)

  const addedToFavouritesSvg = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#FFB525"></path> </g></svg>)

  const moreInformationSvg = (
    <svg className="more-info" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FC4A78" stroke-width="1.5"></circle> <path d="M12 17V11" stroke="#FC4A78" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FC4A78"></circle> </g></svg>)

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
      <div className="buttons-wrapper">
        <button className="category-btn"
          onClick={() => {
            updateCategory("popular");
          }}
        >
          Popular
        </button>
        <button className="category-btn"
          onClick={() => {
            updateCategory("top_rated");
          }}
        >
          Top Rated
        </button>
        <button className="category-btn"
          onClick={() => {
            updateCategory("upcoming");
          }}
        >
          Upcoming
        </button>
        <button className="category-btn"
          onClick={() => {
            updateCategory("now_playing");
          }}
        >
          Now Playing
        </button>
      </div>
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
                <Link className="more-info" to={`moviedetails/${movie.id}`}><img src={posterUrl} alt={movie.title} /></Link>
                
                <div
                  className={
                    currentHoveredMovieId === movie.id
                      ? "hover-active"
                      : "hover-inactive"
                  }
                >
                  <h3 className="title">{movie.title}</h3>
                  <p className="release-date">{movie.release_date}</p>
                  <p className="description">{movie.overview}</p>
                  <div className="hover-btns">
                    <Link className="more-info" to={`moviedetails/${movie.id}`}>{moreInformationSvg}</Link>
                    <button
                      onClick={() => {
                        toggleFavourites(movie);
                      }}
                      className="favourites-button"
                    >
                      {favourites.includes(movie) ||
                        localStorage.getItem(movie.id)
                        ? addedToFavouritesSvg
                        : addToFavouritesSvg}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Subnav;
