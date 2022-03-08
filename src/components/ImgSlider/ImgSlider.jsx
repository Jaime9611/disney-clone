import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel, Wrapper } from './ImgSlider.styles';

const ImgSlider = () => {
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
      <Wrapper>
        <Link to="/">
          <img src="/images/slider-badging.jpg" alt="trend content" />
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to="/">
          <img src="/images/slider-badag.jpg" alt="trend content" />
        </Link>
      </Wrapper>
    </Carousel>
  );
};

export default ImgSlider;
