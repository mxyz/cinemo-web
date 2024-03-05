import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function MovieInformation({ actors, director, synopsis }) {
  return (
    <Box>
      <Typography marginBottom={2} variant="h3" color="primary">
        Informations
      </Typography>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} spacing={1}>
          <Typography variant="h6">Actors</Typography>
          <Typography variant="subtitle1">{actors}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} spacing={1}>
          <Typography variant="h6">Director</Typography>
          <Typography variant="subtitle1">{director}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} spacing={1}>
          <Typography variant="h6">Synopsis</Typography>
          <Typography sx={{ whiteSpace: 'pre-line' }} variant="subtitle1">
            {synopsis}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

MovieInformation.propTypes = {
  actors: PropTypes.string,
  director: PropTypes.string,
  synopsis: PropTypes.string,
};
