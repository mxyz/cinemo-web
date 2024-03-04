import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import movieReducer from './slices/movieSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});
