import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/auth.slice"
import { authenticatedState, initialState, testUser } from "../../fixtures/auth.fixtures"

describe('Tests in auth slice', () => { 
  
  test('it should return the initialState y be called "auth"', () => {
    const state = authSlice.reducer( initialState, {} )

    expect( authSlice.name ).toBe('auth')
    expect( state ).toEqual( initialState )
  }),

  test('It should carry out the authorization', () => {
    
    const state = authSlice.reducer( initialState, login( testUser ) )

    expect( state ).toEqual({
      status: 'authenticated', 
      uid: testUser.uid,
      email: testUser.email,
      displayName: testUser.displayName,
      photoURL: testUser.photoURL,
      errorMessage: null,
    })

  }),

  test('it should carry out logout with no arguments', () => {

    const logoutState = authSlice.reducer( authenticatedState, logout() )
    expect( logoutState ).toEqual({
      status : 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    })

  }),

  test('it should carry out logout with an error message', () => {

    const errorMessage = 'Credenciales no son correctas'

    const logoutState = authSlice.reducer( authenticatedState, logout( errorMessage ) )

    expect( logoutState ).toEqual({
      status : 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    })

  }),

  test('It should change the current state to checking', () => {
    const state = authSlice.reducer( authenticatedState, checkingCredentials() )
    expect( state.status ).toBe('checking')
  })


})