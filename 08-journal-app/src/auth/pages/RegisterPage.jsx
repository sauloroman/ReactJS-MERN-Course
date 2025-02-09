import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPasswordThunk } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispath = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useSelector( state => state.auth )
  const isCheckinAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations )

  const onSubmitRegister = (e) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return;

    dispath( startCreatingUserWithEmailAndPasswordThunk(formState) )
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form
        onSubmit={ onSubmitRegister }
        className="animate__animated animate__fadeIn animate__faster" 
        action="#"
      >
        <Grid2 container direction={'column'} spacing={2}>

          <Grid2 item>
            <TextField 
              label="Nombre completo"
              type="text"
              placeholder="Ingrese su nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid2>

          <Grid2 item>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={emailValid}
            />
          </Grid2>

          <Grid2 item>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder="Cree una contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid2 item size={{ xs: 12 }} display={ !!errorMessage ? '' : 'none' }>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid2>            

            <Grid2 item size={{ xs: 12 }}>
              <Button
                disabled={isCheckinAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography fontSize={14}>Crear cuenta</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction={'row'} spacing={1} justifyContent={'start'}>
            <Typography>Ya tienes una cuenta?</Typography>
            <Link to={'/auth/login'} color='inherit' component={RouterLink}>Ingresar</Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
