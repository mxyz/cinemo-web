import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { IMovie } from 'src/redux/movieSlice';

import MovieCard from '../movie-card';

// ----------------------------------------------------------------------

interface IPropsMoviesView {
  movies: IMovie[];
}

const MoviesView = (props: IPropsMoviesView) => {
  const { movies } = props;
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
};

export default MoviesView;
