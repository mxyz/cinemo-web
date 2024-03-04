import { createSlice } from '@reduxjs/toolkit';

export interface IMovie {
  id: string;
  titleEN: string;
  titleTH: string;
  synopsisEN: string;
  synopsisTH: string;
  genre: string;
  actors: string;
  director: string;
  duration: number;
  bannerImageUrl: string;
  posterImageUrl: string;
  favorited?: boolean;
}

interface MovieState {
  movies: IMovie[];
}

const initialState: MovieState = {
  movies: [],
};

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
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
