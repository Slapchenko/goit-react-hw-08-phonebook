import { Box, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>
        Registration
      </Typography>
      <RegisterForm />
    </Box>
  );
}
