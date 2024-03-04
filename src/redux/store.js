import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-unresolved
import userReducer from './slices/userSlice';
// eslint-disable-next-line import/no-unresolved
import movieReducer from './slices/movieSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});
