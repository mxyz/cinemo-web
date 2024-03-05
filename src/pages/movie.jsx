import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useGetMovies from 'src/api/useGetMovies';

import useFavoriteMovies from 'src/hooks/useFavoriteMovies';

import { MovieDetailView } from 'src/sections/movie/view';

import { getMovieById } from 'src/redux/slices/movieSlice';

export default function MovieDetailPage() {
  const { id } = useParams(); // Get the id parameter from the URL
  const movieDetail = useSelector(getMovieById(id));
  const { refetch } = useGetMovies();
  const { onToggleFavoriteMovieId } = useFavoriteMovies();
  console.log('movie detail', movieDetail, id);
  useEffect(() => {
    if (!movieDetail) {
      refetch();
    }
  }, [movieDetail, refetch]);
  return (
    <>
      <Helmet>
        <title> Movie | Minimal UI </title>
      </Helmet>

      {movieDetail && (
        <MovieDetailView movie={movieDetail} onToggleFavoriteMovieId={onToggleFavoriteMovieId} />
      )}
    </>
  );
}
