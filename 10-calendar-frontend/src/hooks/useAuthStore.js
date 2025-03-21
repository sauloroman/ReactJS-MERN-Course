import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/auth.slice'
import { onLogoutCalendar } from '../store/calendar/calendar.slice'

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    
    dispatch( onChecking() )

    try {
      
      const { data } = await calendarApi.post('/auth', { email, password })
      const { token, name, uid } = data

      localStorage.setItem('token', token )
      localStorage.setItem('token-init-date', new Date().getTime() )

      dispatch( onLogin({ name, uid }) )

    } catch (error) {
      dispatch( onLogout('Credenciales Incorrectas'))
      setTimeout(() =>  dispatch(clearErrorMessage()), 10)
    }

  }

  const startRegister = async ({ name, email, password }) => {

    dispatch( onChecking() )

    try {
      
      const { data } = await calendarApi.post('/auth/register', { name, email, password })

      localStorage.setItem('token', data.token )
      localStorage.setItem('token-init-date', new Date().getTime() )

      dispatch( onLogin({ name: data.name, uid: data.uid }) )

    } catch (error) {
      dispatch( onLogout( error.response.data?.msg || '' ))
      setTimeout(() =>  dispatch(clearErrorMessage()), 10)
    }

  }

  const checkAuthToken = async () => {
    
    const token = localStorage.getItem('token')

    if ( !token ) return dispatch( onLogout() )

    try {
      
      const {data} = await calendarApi.get('/auth/renew')
      localStorage.setItem('token', data.token )
      localStorage.setItem('token-init-date', new Date().getTime() )

      dispatch( onLogin({ name: data.name, uid: data.uid }) )

    } catch (error) {
      localStorage.clear()
      dispatch( onLogout() )
    }

  }

  const startLogout = () => {
    localStorage.clear()
    dispatch( onLogoutCalendar() )
    dispatch( onLogout() )
  }

  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Metodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  }

}