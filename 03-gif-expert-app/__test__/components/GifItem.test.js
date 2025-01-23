import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Tests in GifItem.jsx component', () => {

  const gifsTest = [
    {
      id: '123',
      images: { original: { url: 'https://gif-test-example-1.gif' } }
    },
    {
      id: '456',
      images: { original: { url: 'https://gif-test-example-2.gif' } }
    },
  ]

  test('It must match with the snapshot', () => {
    const { container } = render(<GifItem gifs={ gifsTest } />)
    expect( container ).toMatchSnapshot();
  });

  test('It must show images with url and alt attributes correctly', () => {

    render(<GifItem gifs={gifsTest} />)

    const imagesRendered = document.querySelectorAll('img')

    expect( imagesRendered.length ).toBe( gifsTest.length )

    gifsTest.forEach( (gif, i) => {
      expect( imagesRendered[i].src ).toContain( gif.images.original.url )
      expect( imagesRendered[i].alt ).toContain( gif.id )
    })

  })

});