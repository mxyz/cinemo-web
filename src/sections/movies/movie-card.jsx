import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';

import Iconify from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

const MovieCard = ({
  id,
  posterImageUrl,
  titleEN,
  genre,
  duration,
  releaseDate,
  onClickFavorite,
  favorited,
}) => {
  const theme = useTheme();
  const renderImg = (
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
  );

  return (
    <Link href={`/movie/${id}`} sx={{ textDecoration: 'none' }}>
      <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative' }}>{renderImg}</Box>
        <IconButton
          sx={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: '48px',
            height: '48px',
            mt: 0,
          }}
          onClick={onClickFavorite}
        >
          <Iconify
            width={32}
            icon={favorited ? 'mdi:heart' : 'mdi:heart-outline'}
            color={favorited ? theme.palette.primary.main : 'white'}
          />
        </IconButton>
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="subtitle2" color="primary">
            {fDate(releaseDate)}
          </Typography>
          <Typography variant="h6">{titleEN}</Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: 'auto', // Pushes the box to the bottom
          }}
        >
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Chip label={genre[0]} variant="outlined" />
            <Chip label={`${duration} mins`} variant="outlined" />
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  posterImageUrl: PropTypes.string.isRequired,
  titleEN: PropTypes.string.isRequired,
  genre: PropTypes.array,
  duration: PropTypes.number,
  releaseDate: PropTypes.string,
  onClickFavorite: PropTypes.func,
  favorited: PropTypes.func,
};

export default MovieCard;
