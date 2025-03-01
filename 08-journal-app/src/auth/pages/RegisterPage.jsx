import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form action="">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Roman Nava"
              fullWidth
            />
          </Grid2>

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
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid2>
          </Grid2>

          <Grid2
            width={'100%'}
            container
            direction={'row'}
            justifyContent={'flex-end'}
          >
            <Typography mr={1}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
