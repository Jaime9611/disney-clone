import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/movie/movieSlice';
import {
  selectLoading,
  selectRecommended,
  selectMovies,
  selectOriginals,
  selectSeries,
} from '../../redux/movie/movieSlice';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Categories />
      <MoviesPic
        title="Recommended"
        selected={selectRecommended}
        isLoading={isLoading}
      />
      <MoviesPic
        title="Originals"
        selected={selectOriginals}
        isLoading={isLoading}
      />
      <MoviesPic title="Movies" selected={selectMovies} isLoading={isLoading} />
      <MoviesPic title="Series" selected={selectSeries} isLoading={isLoading} />
    </Container>
  );
};

export default Home;
