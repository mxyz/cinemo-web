import useGetMovies from 'src/api/useGetMovies';

import Router from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import 'src/global.css';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  // call api at first access
  useGetMovies();
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
