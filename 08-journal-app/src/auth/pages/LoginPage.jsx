import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid2 from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Google from '@mui/icons-material/Google';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const { formState, email, password, onInputChange, onResetForm } = useForm(formData)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch( startLoginWithEmailPassword({ email, password }))
    onResetForm()
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
    onResetForm()
  }

  return (
    <AuthLayout title="Login">
      <form aria-label='submit-form' className='animate__animated animate__fadeIn animate__faster' onSubmit={ onSubmit } action="">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              name="email"
              value={email}
              onChange={onInputChange}
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              name="password"
              value={password}
              onChange={onInputChange}
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              inputProps={{ 'data-testid': 'password' }}
            />
          </Grid2>

          <Grid2 mt={2} display={ !!errorMessage || 'none'} width={'100%'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }} width={'100%'}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating} 
                type='submit' 
                variant="contained" 
                fullWidth
              >
                Login
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                aria-label='google-btn'
                disabled={isAuthenticating} 
                variant="outlined" 
                fullWidth
                onClick={ onGoogleSignIn }
              >
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
