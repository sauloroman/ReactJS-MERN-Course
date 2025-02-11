import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Google } from '@mui/icons-material'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPasswordThunk, startGoogleSignInThunk, startLoginWithEmailAndPasswordThunk } from '../../store/auth'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector( state => state.auth )
  const { formState, email, password, onInputChange } = useForm( formData )

  const onSubmitLogin = (e) => {
    e.preventDefault()
    dispatch( startLoginWithEmailAndPasswordThunk(formState) )
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignInThunk() )
  }

  return (
    <AuthLayout title="Iniciar Sesión">
      <form 
        onSubmit={ onSubmitLogin }
        aria-label="form-login"
        action="#"
        className="animate__animated animate__fadeIn animate__faster"
      >

        <Grid2 direction='column' spacing={2} container>
          
          <Grid2 item>
            <TextField 
              label="Correo electrónico"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 item>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder="Ingresa su contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              slotProps={{'data-testid': 'input-password'}}
            />
          </Grid2>

          <Grid2
            display={ !!errorMessage ? '' : 'none' } 
            container 
            sx={{ mb: 2, mt: 1 }} spacing={2}
          >
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button
                sx={{ padding: 1 }}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography fontSize={14}>Ingresar</Typography>
              </Button>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Button
                onClick={ onGoogleSignIn }
                sx={{ padding: 1 }}
                variant="outlined"
                fullWidth
                aria-label="google-btn"
              >
                <Google sx={{ height: 20 }} />
                <Typography fontSize={14} sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction='row' justifyContent='end' >
            <Link component={RouterLink} color="inherit" to="/auth/register">Crear una cuenta</Link>
          </Grid2>

        </Grid2>

      </form>
    </AuthLayout>
  )
}
