import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function MovieTitleAndBanner({
  titleEN,
  genre,
  duration,
  posterImageUrl,
  releaseDate,
  favorited,
  onToggleFavoriteMovieId,
}) {
  console.log(
    titleEN,
    genre,
    duration,
    posterImageUrl,
    releaseDate,
    favorited,
    onToggleFavoriteMovieId
  );
  return (
    <Container>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '148%',
          overflow: 'hidden',
        }}
      >
        <img
          alt={titleEN}
          src={posterImageUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack>
        <Typography>{titleEN}</Typography>
        <Typography>{genre.join('/')}</Typography>
      </Stack>
    </Container>
  );
}

MovieTitleAndBanner.propTypes = {
  titleEN: PropTypes.string,
  genre: PropTypes.array,
  duration: PropTypes.number,
  posterImageUrl: PropTypes.string,
  releaseDate: PropTypes.string,
  favorited: PropTypes.bool,
  onToggleFavoriteMovieId: PropTypes.func.isRequired,
};
