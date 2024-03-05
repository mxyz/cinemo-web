import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MovieInformation from '../movie-information';
import MovieTitleAndBanner from '../movie-title-banner';

// ----------------------------------------------------------------------

export default function MovieDetailView({ movie, onToggleFavoriteMovieId }) {
  console.log(movie, onToggleFavoriteMovieId);
  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h3">{movie.titleEN}</Typography>
        <MovieTitleAndBanner
          titleEN={movie.titleEN}
          genre={movie.genre}
          duration={movie.duration}
          rating={movie.rating}
          posterImageUrl={movie.posterImageUrl}
          releaseDate={movie.releaseDate}
          favorited={movie.favorited}
          onToggleFavoriteMovieId={onToggleFavoriteMovieId}
        />
        <MovieInformation
          actors={movie.actors}
          director={movie.director}
          synopsis={movie.synopsisEN}
        />
      </Stack>
    </Container>
  );
}

MovieDetailView.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    titleEN: PropTypes.string,
    titleTH: PropTypes.string,
    synopsisEN: PropTypes.string,
    synopsisTH: PropTypes.string,
    rating: PropTypes.string,
    genre: PropTypes.array,
    actors: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    bannerImageUrl: PropTypes.string,
    posterImageUrl: PropTypes.string,
    releaseDate: PropTypes.string,
    favorited: PropTypes.bool,
  }),
  onToggleFavoriteMovieId: PropTypes.func.isRequired,
};
