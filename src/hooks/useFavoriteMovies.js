import { useCallback } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { enqueueSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoritedMovieIds, toggleFavoriteMovieId } from 'src/redux/slices/movieSlice';

const useFavoriteMovies = () =>{
    const favoritedMovieIds = useSelector(getFavoritedMovieIds);
    const dispatch = useDispatch();

    const onToggleFavoriteMovieId = useCallback((movieId)=>{
        dispatch(toggleFavoriteMovieId(movieId));
        if(favoritedMovieIds.includes(movieId)) {
            enqueueSnackbar('Removed from favorite', { variant: 'error' });
        } else {
            enqueueSnackbar('Added to favorite', { variant: 'success' });
        }
    },[dispatch, favoritedMovieIds])

    return {
        onToggleFavoriteMovieId,
        favoritedMovieIds,
    }
}

export default useFavoriteMovies;