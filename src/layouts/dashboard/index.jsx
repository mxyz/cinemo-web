import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Box from '@mui/material/Box';

import useAuth from 'src/hooks/useAuth';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const { isAuth, account, onLogout } = useAuth();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav
          openNav={openNav}
          onCloseNav={() => setOpenNav(false)}
          isAuth={isAuth}
          account={account}
          onLogout={onLogout}
        />

        <Main sx={undefined}>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
