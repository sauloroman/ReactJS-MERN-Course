import { getHeroByIdAsync } from "../../../01-intro/src/bases/09-promesas";

describe('Tests in 09-promesas', () => {

  test('It must return a hero if exists', () => {

    const id = 1;

    getHeroByIdAsync( id )
      .then( hero => {

        expect( hero ).toEqual({
          id,
          name: 'Batman',
          owner: 'DC',
        })

        done();

      })
  });

  test('It must return a message if hero does not exist', () => {

    const id = 100000;

    getHeroByIdAsync( id )
      .catch( errorMessage => {

        expect( errorMessage ).toBe(`No existe el heroe con id ${id}`)

        done();

      })
  })

})