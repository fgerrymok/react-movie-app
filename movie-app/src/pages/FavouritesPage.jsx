import { useContext, useState } from "react";
import "../styles/Favourites.css";
import { Context } from "../App";
import { Link } from "react-router-dom";

export default function Favourites() {
  const [favourites, setFavourites] = useContext(Context);
  const [currentHoveredMovieId, setCurrentHoveredMovieId] = useState(null);
  // const [noItemsInFavourites, setNoItemsInFavourites] = useState(false);
  const basePosterUrl = "http://image.tmdb.org/t/p/w342";
  const favouritedMovies = { ...localStorage };
  const addedToFavouritesSvg = (
    <svg className="more-info" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <circle cx="400" cy="400" r="400" fill="#ffb525"></circle>
      <path d="M200,400l141.42,141.42,282.81-282.84" stroke="#fff" stroke-width="66.67" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
    </g>
    </svg>)

  const addToFavouritesSvg = (
    <svg className="more-info" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <circle cx="400" cy="400" r="400" fill="#D3D3DD" opacity="0.5"></circle>
      <path d="M200,400h200M400,400h200M400,400v200M400,400V200" stroke="#FFFFFF" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="133.3333" fill="none"></path>
    </g>
    </svg>)

  const moreInformationSvg = (
    <svg className="more-info" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FC4A78" stroke-width="1.5"></circle> <path d="M12 17V11" stroke="#FC4A78" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FC4A78"></circle> </g></svg>)

  function removeFromFavourites(movie) {
    localStorage.removeItem(movie.id);
    // Updating any state acts to automatically refresh the browser so that localStorage will display
    Object.keys(favouritedMovies).map((key) => {
      setFavourites([...favourites, favouritedMovies[key]]);
    });
  }

  return (
    <div className="main-body">
      <h2 className={Object.keys(favouritedMovies).length === 0 ? "show-message" : "hide-message"}>You have no movies on your Favorites. Add your favorite movies later by clicking {addToFavouritesSvg} Add to Favorites.</h2>;
      <div className="favourites-movie-container">
        {Object.keys(favouritedMovies).map((key) => {
          const stringifiedObject = localStorage.getItem(key);
          const movie = JSON.parse(stringifiedObject);

          return (
            <div
              key={movie["id"]}
              className="favourites-movie-card"
              onMouseEnter={() => {
                setCurrentHoveredMovieId(movie.id);
              }}
              onMouseLeave={() => {
                setCurrentHoveredMovieId(null);
              }}
            >
              <Link to={`../moviedetails/${movie.id}`}>      <img
                src={`${basePosterUrl}${movie["poster_path"]}`}
                alt={movie["title"]}
              /></Link>

              <div
                className={
                  currentHoveredMovieId === movie.id
                    ? "hover-active"
                    : "hover-inactive"
                }
              >
                <h3 className="title">{movie["title"]}</h3>
                <p className="release-date">{movie.release_date}</p>
                <p className="description">{movie.overview}</p>
                <div className="hover-btns">
                  <Link to={`../moviedetails/${movie.id}`}>{moreInformationSvg}</Link>
                  <button
                    onClick={() => {
                      removeFromFavourites(movie);
                    }}
                    className="favourites-button"
                  >
                    {addedToFavouritesSvg}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
