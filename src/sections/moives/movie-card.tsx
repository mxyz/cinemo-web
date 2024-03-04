import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { IMovie } from 'src/redux/movieSlice';

// ----------------------------------------------------------------------

type IPropsMovieCard = IMovie;

const MovieCard = (props: IPropsMovieCard) => {
  const { posterImageUrl, titleEN } = props;
  console.log('trt', titleEN);
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

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {titleEN}
        </Link>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
           
        </Stack> */}
      </Stack>
    </Card>
  );
};

export default MovieCard;
