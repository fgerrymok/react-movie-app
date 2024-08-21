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

const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: topSlider.current,
  focusOnSelect: true,
  arrows: false,
  autoplay:true
};

const settingsTop = {
  speed: 500,
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
            <div className='movie-info'>
             <h2 className='title-homepage'>{poster.original_title}</h2>
             <p className='overview-homepage'>{createExcerpt(poster.overview,25)}</p>
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