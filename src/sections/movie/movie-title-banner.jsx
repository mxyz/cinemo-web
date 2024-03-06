import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', gap: '16px', minHeight: '300px' }}>
      <Box position="relative" width="200px" overflow="hidden">
        <img
          alt={titleEN}
          src={posterImageUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </Box>
      <Stack width="100%" spaceing={1} position="relative">
        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '48px',
            height: '48px',
            mt: 0,
          }}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavoriteMovieId();
          }}
        >
          <Iconify
            width={32}
            icon={favorited ? 'mdi:heart' : 'mdi:heart-outline'}
            color={favorited ? theme.palette.primary.main : 'black'}
          />
        </IconButton>
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
        <Button sx={{ marginTop: 'auto', maxWidth: '200px' }} variant="contained">
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
