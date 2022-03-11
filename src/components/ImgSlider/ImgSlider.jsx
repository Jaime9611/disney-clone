import React from 'react';
import { Link } from 'react-router-dom';
import { selectTrending } from '../../redux/movie/movieSlice';
import { useSelector } from 'react-redux';

import { Carousel, Wrapper } from './ImgSlider.styles';

const ImgSlider = () => {
  const movies = useSelector(selectTrending);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {movies &&
        movies.map((movie) => (
          <Wrapper key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.imageTitle} alt={movie.title} />
              <img src={movie.imageBg} alt={movie.title} />
            </Link>
          </Wrapper>
        ))}
    </Carousel>
  );
};

export default ImgSlider;
