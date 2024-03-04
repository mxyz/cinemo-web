import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import useGetMovies from 'src/api/useGetMovies';

import { MoviesView } from 'src/sections/movies/view';

import { getMovies } from 'src/redux/slices/movieSlice';

export default function MoviesPage() {
  const movies = useSelector(getMovies);

  const { refetch } = useGetMovies();
  useEffect(() => {
    refetch?.();
  }, [refetch]);
  console.log('store movies', movies);
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <MoviesView movies={movies} />
    </>
  );
}
