import React, { useEffect, useReducer } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

// Context Store Config
const defaultStore = {
  isLoading: false,
  movies: [],
};

const MoviesContext = React.createContext(defaultStore);

// Context Provider Component
export const MoviesContextProvider = (props) => {
  // movies Reducer:
  /* useReducer() needs three arguments to function, the first is the Function reducer to use, the second is the inital State, the third is a function to initialize the state. */
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

  const initialState = {
    isLoading: false,
    movies: [],
  };

  const [moviesState, dispatchMovies] = useReducer(moviesReducer, initialState);

  const getMovies = async () => {
    dispatchMovies({ type: 'CALL_API' });
    const snapshot = await getDocs(collection(db, 'Movies'));
    let movies = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(movies);
    if (movies) {
      dispatchMovies({
        type: 'GET_MOVIES',
        payload: movies,
      });
    }
  };

  useEffect(() => {
    getMovies();
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
