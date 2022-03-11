import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchMovie } from '../../api/queries';
import { MoviesList } from '../../components';
import { selectDemoState, selectUserName } from '../../redux/user/userSlice';

import { Container } from './Search.styles';

const Search = () => {
  const [searchMovies, setSerchMovies] = useState([]);
  const userName = useSelector(selectUserName);
  const demoState = useSelector(selectDemoState);
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  let query = useQuery();
  let search = query.get('title');

  const memoizedCallback = useCallback(() => {
    const fetchSearchMovies = async () => {
      const movies = await getSearchMovie(search);
      if (movies) {
        setSerchMovies(movies);
      }
    };
    fetchSearchMovies();
  }, [search]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return userName || demoState ? (
    <Container>
      <MoviesList movies={searchMovies} />
    </Container>
  ) : (
    <h2>No results</h2>
  );
};

export default Search;
