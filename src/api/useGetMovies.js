import useAxios from 'axios-hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { addMovies } from 'src/redux/slices/movieSlice';

const useGetMovies = () => {
  const sessionFavoritedMovieIds = sessionStorage.getItem('favoritedMovieId');
  console.log(sessionFavoritedMovieIds)
  const dispatch = useDispatch();

  console.log(sessionFavoritedMovieIds);

  const [{ data, loading }, refetch] = useAxios({
    url: 'https://www.majorcineplex.com/apis/get_movie_avaiable',
  });

  const mappedMoviesData = useCallback((movies) => {
    if (movies) {
      return movies.map((movie) => ({
        id: movie.id.toString(),
        titleEN: movie.title_en,
        titleTH: movie.title_th,
        synopsisEN: movie.synopsis_en,
        synopsisTH: movie.synopsis_th,
        rating: movie.rating,
        genre: movie.genre.split('/'),
        actors: movie.actor,
        director: movie.director,
        duration: movie.duration,
        bannerImageUrl: movie.widescreen_url,
        posterImageUrl: movie.poster_url,
        releaseDate: movie.release_date,
        favorited: sessionFavoritedMovieIds.includes(movie.id) || false,
      }));
    }
    return undefined;
  }, [sessionFavoritedMovieIds]);

  useEffect(() => {
    if (data) {
      dispatch(addMovies(mappedMoviesData(data.movies)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  return { loading, refetch };
};

export default useGetMovies;
