import React from 'react';

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
        <img src="/images/slider-badging.jpg" alt="trend content" />
      </Wrapper>
      <Wrapper>
        <img src="/images/slider-badag.jpg" alt="trend content" />
      </Wrapper>
    </Carousel>
  );
};

export default ImgSlider;
