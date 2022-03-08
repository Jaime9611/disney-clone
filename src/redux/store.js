import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './movie/movieSlice';
import userReducer from './user/userSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
