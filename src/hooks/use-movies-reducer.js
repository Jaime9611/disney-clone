import { useReducer, useEffect } from 'react';

import { getMovies } from '../api/queries';

const constants = {
  CALL_API: 'CALL_API',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

/**
 * Movies Reducer:
 * useReducer() needs three arguments to function, the first is the Function
 * reducer to use, the second is the inital State, the third is a function
 * to initialize the state.
 */
const moviesReducer = (state, action) => {
  switch (action.type) {
    case constants.CALL_API:
      return { ...state, isLoading: true };
    case constants.SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    default:
      return { isLoading: false, movies: [] };
  }
};

// Initial state for the useReducer hook.
const initialState = {
  isLoading: false,
  movies: [],
};

const useMoviesReducer = () => {
  const [moviesState, dispatchMovies] = useReducer(moviesReducer, initialState);

  const moviesList = async () => {
    dispatchMovies({ type: constants.CALL_API });

    const movies = await getMovies();

    if (movies) {
      dispatchMovies({
        type: constants.SUCCESS,
        payload: movies,
      });
    }
  };

  useEffect(() => {
    moviesList();
  }, []);

  return moviesState;
};

export default useMoviesReducer;
