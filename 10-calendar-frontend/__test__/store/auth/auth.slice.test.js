import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/auth.slice"
import { authenticatedState, initialState } from "../../__fixtures__/auth-states"
import { testUserCredentials } from "../../__fixtures__/test-user"

describe('Tests in auth.slice', () => {

  test('it should return initial state', () => {
    expect( authSlice.getInitialState() ).toEqual( initialState )
  })

  test('it should login an user', () => {

    const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) )
    expect( state ).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    })

  })

  test('it should logout with no errorMessage', () => {

    const state = authSlice.reducer( authenticatedState, onLogout() )
    expect( state ).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined
    })
  })

  
  test('it should logout with an errorMessage', () => {

    const errorMessage = 'Test Error Message'
    const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) )
    expect( state ).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage,
    })
  })

  test('it should clear the error message', () => {
    const errorMessage = 'Test Error Message'
    const state = authSlice.reducer( authenticatedState, onLogout(errorMessage) )
    const newState = authSlice.reducer( state, clearErrorMessage() )
    expect( newState.errorMessage ).toBeUndefined()
  }),

  test('it should set the state into a checking state', () => {

    const state = authSlice.reducer( authenticatedState, onChecking() )
    expect( state ).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
    })
  })

})