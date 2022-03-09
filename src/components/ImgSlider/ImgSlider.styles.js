import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;

  img:first-child {
    position: absolute;
    width: 300px;
    height: 300px;
    object-fit: contain;
    left: 20px;
  }

  img:nth-child(2) {
    width: 100%;
    height: 325px;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    object-fit: cover;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
