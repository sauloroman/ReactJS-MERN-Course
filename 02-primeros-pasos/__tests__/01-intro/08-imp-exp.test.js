import { getHeroeById, getHeroesByOwner } from "../../../01-intro/src/bases/08-imp-exp";
import {heroes} from "../../../01-intro/src/data/heroes";

describe('Tests in 08-imp-exp', () => {

  test('It must return the appropiate hero depending the id received', () => {

    const id = 3;

    const hero = getHeroeById( heroes, id )

    expect( hero ).toEqual({
      id,
      name: expect.any(String),
      owner: expect.any(String)
    })

  });

  test('It must return undefined if the hero does not exist', () => {

    const id = 9999
    const noHero = getHeroeById( heroes, id )
    expect( noHero ).toBeFalsy();

  });

  test('It must return an array with heroes depending the owner received', () => {

    const owner = 'Marvel'
    const heroes = getHeroesByOwner( heroes, owner ) 

    expect( heroes.length ).toBe(2)
    expect( heroes[0] ).toEqual({
      id: expect.any( Number ),
      name: expect.any(String),
      owner: owner
    })
    expect( heroes ).toEqual( heroes.filter( hero => hero.owner === owner ) )

  })

})