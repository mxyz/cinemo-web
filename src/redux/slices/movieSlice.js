import { createSlice } from '@reduxjs/toolkit';


// Check if there's any favorited movie IDs stored in sessionStorage
const favoritedMovieIdsFromSessionStorage = JSON.parse(sessionStorage.getItem('favoritedMovieId')) || [];

export const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    favorited: favoritedMovieIdsFromSessionStorage || [],
  },
  reducers: {
    addMovies: (state, action) => {
      console.log('movies added')
      state.movies = action.payload;
    },
    toggleFavoriteMovieId: (state, action) => {
      const { payload } = action;
      
      // Find the movie in the movies array by its ID
      const movie = state.movies.find(_movie => _movie.id === payload);
      if (movie) {
        // Toggle the 'favorited' property of the movie
        movie.favorited = !movie.favorited;
    
        // Update the favorited list in sessionStorage
        let favoritedListInStorage = sessionStorage.getItem('favoritedMovieId');
        if (favoritedListInStorage) {
          favoritedListInStorage = JSON.parse(favoritedListInStorage);
          if (movie.favorited) {
            favoritedListInStorage.push(payload);
          } else {
            favoritedListInStorage = favoritedListInStorage.filter(favoritedMovieId => favoritedMovieId !== payload);
          }
        } else {
          favoritedListInStorage = [payload];
        }
    
        state.favorited = favoritedListInStorage;
        sessionStorage.setItem('favoritedMovieId', JSON.stringify(favoritedListInStorage));
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

export const getMovieById = (id) => (state) => {
  if (!state || !state.movies || !state.movies.movies) {
    console.error('Invalid state or movie data');
    return null;
  }
  console.log(state)

  const movie = state.movies.movies.find(_movie => _movie.id === id);
  
  if (!movie) {
    console.warn(`Movie with id ${id} not found`);
  }

  return movie;
};