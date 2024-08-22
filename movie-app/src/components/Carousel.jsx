import React from 'react'
import { useState,useEffect, useRef } from 'react';
import Slider from "react-slick";
import "../styles/Carousel.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

function Carousel() {
  const API = import.meta.env.VITE_MOVIE_API_KEY;
  const [mainCarouselMovies, setMainCarouselMovies] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const endpoint = 'https://api.themoviedb.org/3/movie/';
  const imagePath= "https://image.tmdb.org/t/p/original/"
  
  

// second approach to have two sliders
const mainSlider = useRef(null);
const topSlider = useRef(null);

useEffect(()=>{
      const getThreeMovies = async () =>{
        try{
          const response    = await fetch(`${endpoint}now_playing?api_key=${API}`);
          const json        = await response.json();
          const results     = json.results;
          const slicedArray = results.slice(0,3);
          setMainCarouselMovies(slicedArray);
        }
        catch(error){
          console.log('Error:',error);
        }
      };
      getThreeMovies();
    },[])

    
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
  
  


const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: topSlider.current,
  focusOnSelect: true,
  arrows: false,
  autoplay:true
};

const settingsTop = {
  speed: 1500,
  infinite: true,
  arrows:false,
  autoplay:true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  beforeChange: (current, next) => setImageIndex(next),
  asNavFor: mainSlider.current,
  responsive:[
     {
      breakpoint:768, settings:{ slidesToShow:1, slidesToScroll:1, centerMode:true, dots:false, centerPadding:'8%'}
    }, {
      breakpoint:2500, settings:{ slidesToShow:3, slidesToScroll:1, dots:true, centerMode:false, centerPadding:'0'}
    }
  ]
};
// From: https://medium.com/@paulohfev/problem-solving-how-to-create-an-excerpt-fdb048687928
const createExcerpt = (content, maxNumberOfWords, trailingIndicator = '...') => {
  const listOfWords = content.trim().split(' ');
  const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(' ');
  const excerpt = truncatedContent + trailingIndicator;
  const output = listOfWords.length > maxNumberOfWords ? excerpt : content;
  return output;
}


return (
  <div className="carousel-container">
    <div className="main-posters-wrapper">
      <Slider
        {...settingsMain}
        ref={mainSlider}
      >
        {mainCarouselMovies.map((poster) => (
          <div key={poster.id} className="main-posters">
            <img src={`${imagePath}${poster.backdrop_path}`} alt={`main-Poster-${poster.id}`} className='main-hero-image'/>
            <div className='movie-info-wrapper'>
            <div className='movie-info'>
             <h2 className='title-homepage'>{poster.original_title}</h2>
             <p className='overview-homepage'>{createExcerpt(poster.overview,25)}</p>
            </div>
            <div className='hero-btns'>
              <div className='hero-button watch-trailer-btn' onClick={() => openTrailer(poster.id)}>
              <svg className="hero-btn-icon" viewBox="-0.5 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#1001]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609"> </polygon> </g> </g> </g> </g></svg>
              <a href="#">WATCH TRAILER</a>
              </div>
              <div className='hero-button more-info-btn'>
              <svg className="hero-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FC4A78" stroke-width="1.5"></circle> <path d="M12 17V11" stroke="#FC4A78" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FC4A78"></circle> </g></svg>
              <a href="#">MORE INFO</a>
              </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="top-posters-wrapper">
      <Slider
        {...settingsTop}
        ref={topSlider}
      >
        {mainCarouselMovies.map((movie,index) => (
          <div key={movie.id} className={`top-posters ${index === imageIndex ? "active-slide" : "not-active"}`}>
            <img
              className="top-hero-img"
              src={`${imagePath}${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
);
};

export default Carousel