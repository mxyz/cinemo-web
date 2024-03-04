import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';

import Iconify from '../../components/iconify/iconify';

// ----------------------------------------------------------------------

const MovieCard = ({ posterImageUrl, titleEN }) => {
  const renderImg = (
    <Box
      component="img"
      alt={titleEN}
      src={posterImageUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>{renderImg}</Box>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {titleEN}
        </Link>
        <IconButton sx={{ width: '48px', height: '48px', mt: 0 }} onClick={() => undefined}>
          <Iconify width={24} icon="mdi:heart-outline" />
        </IconButton>
      </Box>
    </Card>
  );
};

MovieCard.propTypes = {
  posterImageUrl: PropTypes.string.isRequired,
  titleEN: PropTypes.string.isRequired,
};

export default MovieCard;
