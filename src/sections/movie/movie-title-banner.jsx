import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

export default function MovieTitleAndBanner({
  titleEN,
  genre,
  duration,
  rating,
  posterImageUrl,
  releaseDate,
  favorited,
  onToggleFavoriteMovieId,
}) {
  return (
    <Box sx={{ display: 'flex', gap: '16px', minHeight: '300px' }}>
      <Box
        sx={{
          position: 'relative',
          width: '200px',
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
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack>
        <Typography variant="subtitle2" color="primary">
          {fDate(releaseDate)}
        </Typography>
        <Typography variant="h4">{titleEN}</Typography>
        <Typography variant="subtitle2">{genre.join(', ')}</Typography>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Typography variant="subtitle2">{rating}</Typography>
          <Iconify width={24} icon="mdi:clock-time-four-outline" color="black" />
          <Typography variant="subtitle2">{duration} mins</Typography>
        </Box>
        <Button sx={{ marginTop: 'auto' }} variant="contained">
          See Showtime
        </Button>
      </Stack>
    </Box>
  );
}

MovieTitleAndBanner.propTypes = {
  titleEN: PropTypes.string,
  genre: PropTypes.array,
  duration: PropTypes.number,
  rating: PropTypes.string,
  posterImageUrl: PropTypes.string,
  releaseDate: PropTypes.string,
  favorited: PropTypes.bool,
  onToggleFavoriteMovieId: PropTypes.func.isRequired,
};
