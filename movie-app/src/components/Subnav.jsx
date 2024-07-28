import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Subnav() {
  const [movies, setMovies] = useState([]);
  const baseImgUrl = "http://image.tmdb.org/t/p/w185";

  async function generateMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjRlOTczNWU5ZDgxNjhhYjRjM2QzYWEwMmRkYzIyMSIsIm5iZiI6MTcyMjEzMzQ5OC4xNzM1NSwic3ViIjoiNjY1YmZmOTc4OWJiOWI4MjI0NWI3YjhkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gjwcZ3G6rgprDSgdvd8HMowwWjbJ94di2XnupbpgV6o",
        },
      }
    );
    const data = await response.json();
    const movieData = data.results;
    setMovies(movieData);
    console.log(movieData);
  }

  useEffect(() => {
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
        {movies.map((movie) => {
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
