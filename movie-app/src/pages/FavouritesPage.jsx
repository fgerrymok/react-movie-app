import { useContext } from "react";
import "../styles/Favourites.css";
import { Context } from "../App";

export default function Favourites() {
  const [favourites, setFavourites] = useContext(Context);
  const basePosterUrl = "http://image.tmdb.org/t/p/w185";
  const favouritedMovies = { ...localStorage };

  // if favourites state is empty
  // display: you have no favourites
  // if favourites state is not empty
  // iterate through the state array and display each movie

  return (
    <div>
      <h2>Favourites</h2>
      <div className="favourites-movie-container">
        {/* {favourites.map((movie) => {
          return (
            <div key={movie.id} className="favourites-movie-card">
              <img
                src={`${basePosterUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          );
        })} */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
