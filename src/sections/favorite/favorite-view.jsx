import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import MovieCard from 'src/sections/movies/movie-card';

// ----------------------------------------------------------------------

const EmptyList = () => (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography>There is no favorited movie</Typography>
    <Link href="/">
      <Typography>Explore for favorite movies</Typography>
    </Link>
  </Box>
);

export default function FavoriteView({ favoritedMovies, onToggleFavoriteMovieId }) {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Favorited Movies
      </Typography>

      <Grid container spacing={3}>
        {favoritedMovies?.length > 0 ? (
          favoritedMovies.map((movie) => (
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
                releaseDate={movie.releaseDate}
                onClickFavorite={() => onToggleFavoriteMovieId(movie.id)}
                favorited={movie.favorited}
              />
            </Grid>
          ))
        ) : (
          <EmptyList />
        )}
      </Grid>
    </Container>
  );
}

FavoriteView.propTypes = {
  favoritedMovies: PropTypes.array,
  onToggleFavoriteMovieId: PropTypes.func.isRequired,
};
