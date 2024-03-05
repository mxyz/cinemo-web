import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MovieTitleAndBanner from '../movie-title-banner';

// ----------------------------------------------------------------------

export default function MovieDetailView({ movie, onToggleFavoriteMovieId }) {
  console.log(movie, onToggleFavoriteMovieId);
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        {movie.titleEN}
      </Typography>

      <MovieTitleAndBanner
        titleEN={movie.titleEN}
        genre={movie.genre}
        duration={movie.duration}
        posterImageUrl={movie.posterImageUrl}
        releaseDate={movie.releaseDate}
        favorited={movie.favorited}
        onToggleFavoriteMovieId={onToggleFavoriteMovieId}
      />
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
