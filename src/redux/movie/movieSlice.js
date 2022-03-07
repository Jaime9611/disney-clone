import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../../api/queries';

const initialState = {
  isLoading: false,
  recommended: null,
  originals: null,
  movies: null,
  series: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesLoading: (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    setMovies: (state, action) => {
      if (state.isLoading) {
        state.isLoading = false;
      }
      state.recommended = action.payload.recommended;
      state.originals = action.payload.originals;
      state.movies = action.payload.movies;
      state.series = action.payload.series;
    },
  },
});

export const { setMovies, moviesLoading } = movieSlice.actions;

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesLoading());
  const allMovies = await getMovies();
  let recommended = allMovies.filter((movie) => movie.type === 'recommended');
  let originals = allMovies.filter((movie) => movie.type === 'original');
  let movies = allMovies.filter((movie) => movie.type === 'movie');
  let series = allMovies.filter((movie) => movie.type === 'serie');

  dispatch(
    setMovies({
      recommended,
      originals,
      movies,
      series,
    }),
  );
};

export const selectLoading = (state) => state.movie.isLoading;
export const selectRecommended = (state) => state.movie.recommended;
export const selectOriginals = (state) => state.movie.originals;
export const selectMovies = (state) => state.movie.movies;
export const selectSeries = (state) => state.movie.series;

export default movieSlice.reducer;
