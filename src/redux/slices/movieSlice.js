import { createSlice } from '@reduxjs/toolkit';

export const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    onFavoriteMovie: (state, action) => {
      if (state.movies[0]) {
        state.movies[0].favorited = action.payload;
      }
    },
  },
});

const movieReducer = MovieSlice.reducer;

export default movieReducer;

export const { addMovies, onFavoriteMovie } = MovieSlice.actions;

export const getMovies = (state) => state.movies?.movies;
