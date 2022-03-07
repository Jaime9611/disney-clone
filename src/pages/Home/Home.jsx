import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

const Home = () => {
  let navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <Container>
      <ImgSlider />
      <Categories />
      <MoviesPic onMovieClick={handleMovieClick} />
    </Container>
  );
};

export default Home;
