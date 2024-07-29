import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import callAPI from "../utilities/api";

function Subnav() {
  const [movies, setMovies] = useState([]);
  const baseImgUrl = "http://image.tmdb.org/t/p/w185";

  useEffect(() => {
    async function generateMovies() {
      const movieData = await callAPI();
      setMovies(movieData);
    }
    generateMovies();
  }, []);

  return (
    <>
      <ul className="sub-nav">
        <li>
          <Link to="#">Popular</Link>
        </li>
        <li>
          <Link to="#">Top Rated</Link>
        </li>
        <li>
          <Link to="#">Upcoming</Link>
        </li>
        <li>
          <Link to="#">Now Playing</Link>
        </li>
      </ul>
      <div className="movies-container">
        {movies &&
          movies.map((movie) => {
            const posterUrl = baseImgUrl + movie.poster_path;

            return (
              <div className="movie-card" key={movie.id}>
                <img src={posterUrl} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Subnav;
