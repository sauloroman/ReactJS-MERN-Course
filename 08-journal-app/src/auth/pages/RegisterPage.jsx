import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)
  const isAuthenticating = useMemo(() => status === 'checking',[status])

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)

    if ( !isFormValid ) return

    dispatch( startCreatingUserWithEmailPassword( formState ) )
    setFormSubmitted( false )
    onResetForm()
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmit} action="#">
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              label="Nombre completo"
              type="text"
              placeholder="Roman Nava"
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              name="email"
              value={email}
              onChange={onInputChange}
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 2 }} width={'100%'}>
            
            <Grid2 display={!!errorMessage || 'none'} width={'100%'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
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
