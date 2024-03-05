import { createSlice } from '@reduxjs/toolkit';

export const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    favorited: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    toggleFavoriteMovieId: (state, action) => {
      const { payload } = action;
      
      // Find the movie in the movies array by its ID
      const movie = state.movies.find(_movie => _movie.id === payload);
      console.log('dddddd');
      if (movie) {
        // Toggle the 'favorited' property of the movie
        movie.favorited = !movie.favorited;
    
        // Update the favorited list in sessionStorage
        let newFavoritedList;
        if (movie.favorited) {
          newFavoritedList = Array.from(new Set([...state.favorited, payload]));
        } else {
          newFavoritedList = state.favorited.filter(favoritedMovieId => favoritedMovieId !== payload);
        }
        
        state.favorited = newFavoritedList;
        sessionStorage.setItem('favoritedMovieId', JSON.stringify(newFavoritedList));
      }
    }
  }
});

const movieReducer = MovieSlice.reducer;

export default movieReducer;

export const { addMovies, toggleFavoriteMovieId } = MovieSlice.actions;

export const getMovies = (state) => state.movies.movies;

export const getFavoritedMovieIds = (state) => state.movies.favorited;

export const getFavoritedMovies = (state)=> state.movies.movies.filter(movie=>state.movies.favorited.includes(movie.id));