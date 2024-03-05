import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import useGetMovies from 'src/api/useGetMovies';

import useFavoriteMovies from 'src/hooks/useFavoriteMovies';

import { FavoriteView } from 'src/sections/favorite';

import { getFavoritedMovies } from 'src/redux/slices/movieSlice';

export default function FavoritePage() {
  const movies = useSelector(getFavoritedMovies);
  const { onToggleFavoriteMovieId } = useFavoriteMovies();
  const { refetch } = useGetMovies();
  console.log(movies);
  useEffect(() => {
    if (!movies) {
      refetch?.();
    }
  }, [movies, refetch]);
  return (
    <>
      <Helmet>
        <title> My Favorite | Minimal UI </title>
      </Helmet>

      <FavoriteView favoritedMovies={movies} onToggleFavoriteMovieId={onToggleFavoriteMovieId} />
    </>
  );
}
