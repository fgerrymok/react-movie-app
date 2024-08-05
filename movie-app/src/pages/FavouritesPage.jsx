import { useEffect, useState, useContext } from "react";
import "../styles/Favourites.css";
import { Context } from "../App";

export default function Favourites() {
  const [favourites, setFavourites] = useContext(Context);
  // if favourites state is empty
  // display: you have no favourites
  // if favourites state is not empty
  // iterate through the state array and display each movie

  return (
    <div>
      <h2>Favourites</h2>
      {/* map through array of movies and display each one
      lets first hardcode some values */}
      {favourites.map((movie) => {
        return (
          <div key={movie}>
            <h3>{movie}</h3>
          </div>
        );
      })}
    </div>
  );
}
