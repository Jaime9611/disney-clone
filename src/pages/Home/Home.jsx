import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movie/movieSlice';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

const Home = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
