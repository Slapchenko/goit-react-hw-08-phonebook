import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';
import { useAuth } from 'hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, mb: '20px' }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ContactsIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Navigation />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
