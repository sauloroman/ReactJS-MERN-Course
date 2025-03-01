import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }} width={'100%'}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="outlined" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2
            width={'100%'}
            container
            direction={'row'}
            justifyContent={'flex-end'}
          >
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
