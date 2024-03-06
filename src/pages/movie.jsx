import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useGetMovies from 'src/api/useGetMovies';

import useFavoriteMovies from 'src/hooks/useFavoriteMovies';

import { MovieDetailView, NotFoundMovieDetail } from 'src/sections/movie/view';

import { getMovieById, getIsHasMovies } from 'src/redux/slices/movieSlice';

export default function MovieDetailPage() {
  const { id } = useParams(); // Get the id parameter from the URL
  const movieDetail = useSelector(getMovieById(id));
  const isHasMovies = useSelector(getIsHasMovies);
  const { refetch } = useGetMovies();
  const { onToggleFavoriteMovieId } = useFavoriteMovies();
  useEffect(() => {
    if (!movieDetail && !isHasMovies) {
      refetch();
    }
  }, [isHasMovies, movieDetail, refetch]);
  return (
    <>
      <Helmet>
        <title> Movie | Minimal UI </title>
      </Helmet>

      {!movieDetail && isHasMovies && <NotFoundMovieDetail />}

      {movieDetail && isHasMovies && (
        <MovieDetailView movie={movieDetail} onToggleFavoriteMovieId={onToggleFavoriteMovieId} />
      )}
    </>
  );
}
