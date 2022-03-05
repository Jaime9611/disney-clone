import React, { useEffect, useReducer } from 'react';

import { getMovies } from '../api/queries';

// Context Store Config
const defaultStore = {
  isLoading: false,
  movies: [],
};

/**
 * Context API:
 * For creating a context api you need to import the createContext() function,
 * which receives a default value for the state, and object is normally used...
 */
const MoviesContext = React.createContext(defaultStore);

// Context Provider Component
export const MoviesContextProvider = (props) => {
  /**
   * Movies Reducer:
   * useReducer() needs three arguments to function, the first is the Function
   * reducer to use, the second is the inital State, the third is a function
   * to initialize the state.
   */
  const moviesReducer = (state, action) => {
    switch (action.type) {
      case 'CALL_API':
        return { ...state, isLoading: true };
      case 'GET_MOVIES':
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

  const [moviesState, dispatchMovies] = useReducer(moviesReducer, initialState);

  const moviesList = async () => {
    dispatchMovies({ type: 'CALL_API' });

    const movies = await getMovies();

    if (movies) {
      dispatchMovies({
        type: 'GET_MOVIES',
        payload: movies,
      });
    }
  };

  useEffect(() => {
    moviesList();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        isLoading: moviesState.isLoading,
        movies: moviesState.movies,
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
