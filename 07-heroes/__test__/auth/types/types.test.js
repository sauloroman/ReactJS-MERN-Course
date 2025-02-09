import { types } from "../../../src/auth/types/types"

describe('Tests in types.js', () => {

  test('It should return the correct types', () => {

    expect( types ).toEqual({
      login: '[Auth] - Login',
      logout: '[Auth] - Logout'
    })

  })

})