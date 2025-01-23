import { getImage } from "../../../01-intro/src/bases/11-async-await"

describe('Tests in 11-async-await', () => {

  test('It must return an url image', async () => {

    const url = await getImage()
    expect( url.startsWith('https') ).toBeTruthy()

  })

})  