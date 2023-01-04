import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
    >
      <Typography sx={{ textAlign: 'end', fontSize: '10px' }}>
        Welcome, {user.name}
      </Typography>
      <Button
        sx={{
          textTransform: '  capitalize',
        }}
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
