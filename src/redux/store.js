import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './movie/movieSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
