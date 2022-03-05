import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

import MoviesContext from '../../context/store';

const Home = () => {
  const ctx = useContext(MoviesContext);
  let navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <Container>
      <ImgSlider />
      <Categories />
      <MoviesPic ctx={ctx} onMovieClick={handleMovieClick} />
    </Container>
  );
};

export default Home;
