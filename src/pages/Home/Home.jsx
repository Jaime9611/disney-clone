import React from 'react';

import { Container } from './Home.styles';
import { ImgSlider, Categories, MoviesPic } from '../../components';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Categories />
      <MoviesPic />
    </Container>
  );
};

export default Home;
