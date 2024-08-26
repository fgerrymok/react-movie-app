import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import "../styles/Subnav.css";
const API = import.meta.env.VITE_MOVIE_API_KEY;

function Subnav() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [pageNumber, setPageNumber] = useState(1);
  const [currentHoveredMovieId, setCurrentHoveredMovieId] = useState(null);
  const [favourites, setFavourites] = useContext(Context);
  const basePosterUrl = "http://image.tmdb.org/t/p/w342";
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

  const moreInformationSvg = (
    <svg className="more-info" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FC4A78" stroke-width="1.5"></circle> <path d="M12 17V11" stroke="#FC4A78" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FC4A78"></circle> </g></svg>)

  useEffect(() => {
    async function generateMovies() {
      setMovies([]);
      setPageNumber(1);
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

  function loadMoreMovies() {
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
    async function displayMoreMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${newPageNumber}&api_key=${API}`
      );
      const data = await response.json();
      const moreMovieData = data.results;
      setMovies([...movies, ...moreMovieData]);
    }
    displayMoreMovies();
  }

  // From: https://medium.com/@paulohfev/problem-solving-how-to-create-an-excerpt-fdb048687928
  const createExcerpt = (content, maxNumberOfWords, trailingIndicator = '...') => {
    const listOfWords = content.trim().split(' ');
    const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
    const excerpt = truncatedContent + trailingIndicator;
    const output = listOfWords.length > maxNumberOfWords ? excerpt : content;
    return output;
  }

  return (
    <>
      <div className="buttons-wrapper">
        <button className={category === "popular" ? "page-load-style" : "category-btn"}
          onClick={() => {
            updateCategory("popular");
          }}
        >
          Popular
        </button>
        <button className={category === "top_rated" ? "page-load-style" : "category-btn"}
          onClick={() => {
            updateCategory("top_rated");
          }}
        >
          Top Rated
        </button>
        <button className={category === "upcoming" ? "page-load-style" : "category-btn"}
          onClick={() => {
            updateCategory("upcoming");
          }}
        >
          Upcoming
        </button>
        <button className={category === "now_playing" ? "page-load-style" : "category-btn"}
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
                <Link className="more-info" to={`moviedetails/${movie.id}`}><img src={movie.poster_path !== null ? `${basePosterUrl}${movie.poster_path}` : "../../public/moviecard-placeholder.jpg"} alt={movie.title} /></Link>

                <div
                  className={
                    currentHoveredMovieId === movie.id
                      ? "hover-active"
                      : "hover-inactive"
                  }
                >
                  <h3 className="title">{movie.title}</h3>
                  <p className="release-date">{movie.release_date}</p>
                  <p className="description">{createExcerpt(movie.overview, 15)}</p>
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
      <button onClick={loadMoreMovies} className="load-more-movies">Load More...</button>
    </>
  );
}

export default Subnav;
