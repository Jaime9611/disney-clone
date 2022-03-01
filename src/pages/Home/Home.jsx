import React from 'react';

import { Container } from './Home.styles';
import { ImgSlider, Categories } from '../../components';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Categories />
    </Container>
  );
};

export default Home;
