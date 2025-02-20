import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export default function AccountPopover({ account, onLogin, onLogout }) {
  const [open, setOpen] = useState(null);

  const toggleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleLogin = useCallback(() => {
    onLogin();
  }, [onLogin]);
  const handleLogout = useCallback(() => {
    onLogout();
  }, [onLogout]);

  return (
    <>
      <IconButton
        onClick={toggleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account?.imageUrl}
          alt={account?.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account?.displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={() => toggleOpen({ currentTarget: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        {account.displayName && (
          <>
            <Box sx={{ my: 1.5, px: 2 }}>
              <Typography variant="subtitle2" noWrap>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {account.email}
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

            <MenuItem
              disableRipple
              disableTouchRipple
              onClick={handleLogout}
              sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
            >
              Logout
            </MenuItem>
          </>
        )}
        {!account.displayName && (
          <MenuItem
            disableRipple
            disableTouchRipple
            onClick={handleLogin}
            sx={{ typography: 'body2', py: 1.5 }}
          >
            Login
          </MenuItem>
        )}
      </Popover>
    </>
  );
}

AccountPopover.propTypes = {
  account: PropTypes.shape({
    imageUrl: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};
