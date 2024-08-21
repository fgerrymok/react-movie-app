import { useContext, useState } from "react";
import "../styles/Favourites.css";
import { Context } from "../App";

export default function Favourites() {
  const [favourites, setFavourites] = useContext(Context);
  const basePosterUrl = "http://image.tmdb.org/t/p/w185";
  const favouritedMovies = { ...localStorage };
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

  function removeFromFavourites(movie) {
    localStorage.removeItem(movie.id);
    // Updating any state acts to automatically refresh the browser so that localStorage will display
    Object.keys(favouritedMovies).map((key) => {
      setFavourites([...favourites, favouritedMovies[key]]);
    });
    // console.log(favouritedMovies);
  }

  return (
    <div>
      <h2>Favourites</h2>
      <div className="favourites-movie-container">
        {Object.keys(favouritedMovies).map((key) => {
          const stringifiedObject = localStorage.getItem(key);
          const movie = JSON.parse(stringifiedObject);

          return (
            <div key={movie["id"]} className="favourites-movie-card">
              <img
                src={`${basePosterUrl}${movie["poster_path"]}`}
                alt={movie["title"]}
              />
              <h3>{movie["title"]}</h3>
              <button
                onClick={() => {
                  removeFromFavourites(movie);
                }}
                className="favourites-button"
              >
                {favouritedSvg}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
