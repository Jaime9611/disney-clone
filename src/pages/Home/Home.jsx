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

import { selectDemoState, selectUserName } from '../../redux/user/userSlice';

import { Container } from './Home.styles';
import { Categories, ImgSlider, MoviesPic } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const userName = useSelector(selectUserName);
  const demoState = useSelector(selectDemoState);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, userName]);

  return userName || demoState ? (
    <Container>
      <ImgSlider />
      <Categories />
      <MoviesPic
        title="Recommended"
        selected={selectRecommended}
        isLoading={isLoading}
        idName="recommended"
      />
      <MoviesPic
        title="Originals"
        selected={selectOriginals}
        isLoading={isLoading}
        idName="originals"
      />
      <MoviesPic
        title="Movies"
        selected={selectMovies}
        isLoading={isLoading}
        idName="movies"
      />
      <MoviesPic
        title="Series"
        selected={selectSeries}
        isLoading={isLoading}
        idName="series"
      />
    </Container>
  ) : (
    <h2>Not allowed here!</h2>
  );
};

export default Home;
