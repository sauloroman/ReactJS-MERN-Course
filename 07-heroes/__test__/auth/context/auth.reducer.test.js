import { authReducer } from "../../../src/auth/context/auth.reducer"
import { types } from "../../../src/auth/types/types"

describe('Tests in authReducer component', () => {

  test('it should return the default state', () => {

    const state = authReducer({logged: false}, {})
    expect( state ).toEqual({ logged: false })

  })

  test('it should create an action to login an user ', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Roman Nava',
        id: '1234abc'
      }
    }   

    const newState = authReducer( {logged: false}, action )
    expect( newState ).toEqual({ logged: true, user: action.payload })

  })

  test('it should delete the user and logout', () => {

    const currentState = {
      logged: true,
      user: { id: '123abc', name: 'Roman Nava' }
    }

    const action = {
      type: types.logout,
    } 

    const newState = authReducer( currentState, action )
    expect( newState ).toEqual({ logged: false, user: null })

  })

})