import {getGifs} from '../../src/helpers/getGifs'

describe('Tests in getGifs.js', () => {

  test('It must return an array with 10 gifs', async () => {
    const searchTest = 'Goku'
    const data = await getGifs(searchTest) 
    expect( data.length ).toBe(10);
  })

})