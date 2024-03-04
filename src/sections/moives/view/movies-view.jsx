import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import MovieCard from '../movie-card';

// ----------------------------------------------------------------------

export default function MoviesView({ movies }) {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Movies
      </Typography>

      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid key={movie.id} xs={12} sm={6} md={3}>
            <MovieCard
              id={movie.id}
              titleEN={movie.titleEN}
              titleTH={movie.titleTH}
              synopsisEN={movie.synopsisEN}
              synopsisTH={movie.synopsisTH}
              genre={movie.genre}
              actors={movie.actors}
              director={movie.director}
              duration={movie.duration}
              bannerImageUrl={movie.bannerImageUrl}
              posterImageUrl={movie.posterImageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

MoviesView.propTypes = {
  movies: PropTypes.array.isRequired,
};
