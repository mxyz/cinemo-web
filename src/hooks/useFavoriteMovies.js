import { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getFavoritedMovieIds, toggleFavoriteMovieId } from 'src/redux/slices/movieSlice';

const useFavoriteMovies = () =>{
    const favoritedMovieIds = useSelector(getFavoritedMovieIds);
    const sessionFavoritedMovieIds = sessionStorage.getItem('favoritedMovieId');
    const dispatch = useDispatch();

    const _favoritedMovieIds = useMemo(()=>sessionFavoritedMovieIds || favoritedMovieIds,[favoritedMovieIds, sessionFavoritedMovieIds]);

    const onToggleFavoriteMovieId = useCallback((movieId)=>{
        dispatch(toggleFavoriteMovieId(movieId));
    },[dispatch])

    return {
        onToggleFavoriteMovieId,
        _favoritedMovieIds,
    }
}

export default useFavoriteMovies;