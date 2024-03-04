import useAxios from 'axios-hooks';
import { useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

import { IMovie, addMovies } from 'src/redux/movieSlice';

const useGetMovies = () => {
  const dispatch = useDispatch();

  const [{ data, loading }, refetch] = useAxios({
    url: 'https://www.majorcineplex.com/apis/get_movie_avaiable',
  });

  const moviesData: IMovie[] = useMemo(() => {
    if (data?.movies) {
      return data.movies.map((movie) => ({
        id: movie.id.toString(),
        titleEN: movie.title_en,
        titleTH: movie.title_th,
        synopsisEN: movie.synopsis_en,
        synopsisTH: movie.synopsis_th,
        genre: movie.genre,
        actors: movie.actor,
        director: movie.director,
        duration: movie.duration,
        bannerImageUrl: movie.widescreen_url,
        posterImageUrl: movie.poster_url,
        favorited: false,
      }));
    }
    return undefined;
  }, [data]);

  useEffect(() => {
    if (moviesData) {
      dispatch(addMovies(moviesData));
    }
  }, [dispatch, moviesData]);

  return { moviesData, loading, refetch };
};

export default useGetMovies;
