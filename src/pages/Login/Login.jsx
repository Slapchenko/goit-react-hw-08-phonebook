import { Box, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}
