import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { act, renderHook, waitFor } from "@testing-library/react"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { authSlice } from "../../src/store/auth/auth.slice"
import { authenticatedState, initialState, notAuthenticatedState } from "../__fixtures__/auth-states"
import { testUserCredentials } from "../__fixtures__/test-user"
import { calendarApi } from "../../src/api"

const getMockStore = ( initialState = {} ) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer
    },
    preloadedState: {
      auth: {...initialState}
    }
  })
}

describe('Tests in useAuthStore hook', () => {

  beforeEach(() => localStorage.clear())

  test('it should return the default values', () => { 

    const mockStore = getMockStore({ ...initialState })

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })

    expect( result.current ).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
      startLogin: expect.any(Function),
      startRegister: expect.any(Function),
      checkAuthToken: expect.any(Function),
      startLogout: expect.any(Function),
    })

  })

  test('startLogin should login correctly', async () => {

    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })

    await act(async() => {
      await result.current.startLogin({ ...testUserCredentials })
    })

    const { errorMessage, status, user } = result.current

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: testUserCredentials.name, uid: testUserCredentials.uid }
    })

    expect( localStorage.getItem('token') ).toEqual( expect.any(String) )
    expect( localStorage.getItem('token-init-date') ).toEqual( expect.any(String) )

  })  

  test('startLogin should fail the authentication', async () => {

    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })

    await act(async() => {
      await result.current.startLogin({ email: 'noexiste@gmail.com', password: '123' })
    })

    const { errorMessage, status, user } = result.current

    expect({ errorMessage, status, user }).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: 'Credenciales Incorrectas', // expect.any(String)
    })
    expect( localStorage.getItem('token')).toBeNull()

    await waitFor(
      () => expect( result.current.errorMessage ).toBeUndefined()
    )

  })

  test('startRegister should create a new user', async () => {

    const newUser = { 
      email: 'foe@woe.com', 
      password: '123', 
      name: 'Test User 2' 
    }

    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })

    // Evitar llegar al backend
    const spy = jest.spyOn( calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        uid: '123-abc-xyz',
        name: 'test user',
        token: 'token.test'
      }
    })

    await act(async() => {
      await result.current.startRegister( newUser )
    })

    const { errorMessage, status, user } = result.current

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: 'test user', uid: '123-abc-xyz' }
    })
    
    // Destruir el espia
    spy.mockRestore()

  })

  test('startRegister should not create an user if already exists', async () => {

    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })

    await act(async() => {
      await result.current.startRegister( testUserCredentials )
    })

    const { status, errorMessage, user } = result.current

    expect({ status, errorMessage, user }).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: 'El correo ya existe',
    })

  })

  test('checkAuthToken should fail if there is no token', async () => {

    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })
  
    await act(async() => {
      await result.current.checkAuthToken()
    })

    const { errorMessage, status, user } = result.current

    expect({ errorMessage, status, user }).toEqual(notAuthenticatedState)

  })  

  test('checkAuthToken should authenticate an user if there is a token', async () => {

    const { data } = await calendarApi.post('/auth', testUserCredentials )
    localStorage.setItem('token', data.token )

    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
    })
  
    await act(async() => {
      await result.current.checkAuthToken()
    })

    const { errorMessage, status, user } = result.current

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: testUserCredentials.name, uid: testUserCredentials.uid }
    })

  })  

})