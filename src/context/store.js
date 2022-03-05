import React from 'react';

import useMoviesReducer from '../hooks/use-movies-reducer';

// Context Store default state
const defaultStore = {
  isLoading: false,
  movies: [],
};

/**
 * Context API:
 * For creating a context api you need to import the createContext() function,
 * which receives a default value for the state, an object is normally used...
 */
const MoviesContext = React.createContext(defaultStore);

// Context Provider Component
export const MoviesContextProvider = (props) => {
  const state = useMoviesReducer();

  return (
    <MoviesContext.Provider
      value={{
        isLoading: state.isLoading,
        movies: state.movies,
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
