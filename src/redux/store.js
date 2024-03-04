import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './slices/movieSlice';
import accountReducer from './slices/accountSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
    account: accountReducer,
  },
});
