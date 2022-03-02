import React from 'react';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

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
