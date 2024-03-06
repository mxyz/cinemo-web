import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const NotFoundMovieDetail = () => (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography>Not Found Movie Detail</Typography>
    <Link href="/">
      <Typography>Explore for movies</Typography>
    </Link>
  </Box>
);

export default NotFoundMovieDetail;
