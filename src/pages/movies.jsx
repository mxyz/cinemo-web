// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import useFavoriteMovies from 'src/hooks/useFavoriteMovies';

import { MoviesView } from 'src/sections/movies/view';

import { getMovies } from 'src/redux/slices/movieSlice';

export default function MoviesPage() {
  const movies = useSelector(getMovies);
  const { onToggleFavoriteMovieId } = useFavoriteMovies();
  return (
    <>
      <Helmet>
        <title> Movies | Minimal UI </title>
      </Helmet>

      <MoviesView movies={movies} onToggleFavoriteMovieId={onToggleFavoriteMovieId} />
    </>
  );
}
