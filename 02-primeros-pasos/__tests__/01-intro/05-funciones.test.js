import { getUser, getActiveUser } from "../../../01-intro/src/bases/05-funciones"

describe('Tests in file 05-funciones', () => {

  test('It must return an object with two string as property values', () => {

    const testUser = {
      uuid: 'ABC124',
      username: 'Romantico98'
    }

    const user = getUser()

    expect( user ).toEqual( testUser );

  }),

  test('It must return an object with property isActive as true if name received is Roman', () => {

    const name = 'Roman';
    const userActive = getActiveUser( name )

    expect( userActive ).toEqual({
      uuid: expect.any(String),
      username: name,
      isActive: true,
    })
  }),

  test('It must return an object with property isActive as false if name received is not Roman', () => {

    const name = 'Carlos';
    const userActive = getActiveUser( name )

    expect( userActive ).toEqual({
      isActive: false,
    })
  }) 

})