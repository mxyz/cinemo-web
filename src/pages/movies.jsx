import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line import/extensions
import useGetMovies from 'src/api/useGetMovies';
import { getMovies } from 'src/redux/movieSlice';

import { MoviesView } from 'src/sections/moives/view';

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
