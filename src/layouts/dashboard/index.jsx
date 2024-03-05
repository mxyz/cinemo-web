import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';

import { useRouter } from 'src/routes/hooks';

import useAuth from 'src/hooks/useAuth';

import { getAccount } from 'src/redux/slices/accountSlice';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const { onLogout } = useAuth();
  const account = useSelector(getAccount);
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const onClickLogin = useCallback(() => {
    router.push('/login');
  }, [router]);
  return (
    <>
      <Header
        onOpenNav={() => setOpenNav(true)}
        account={account}
        onLogout={onLogout}
        onLogin={onClickLogin}
      />

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
