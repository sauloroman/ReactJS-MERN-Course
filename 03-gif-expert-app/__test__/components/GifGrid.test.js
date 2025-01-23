import { render, screen, fireEvent } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Tests in GifGrid.jsx', () => {

  const onDeleteCategoryMock = jest.fn()
  const categoryTest = 'Batman';

  test('It must show title in a h2 element', () => {  

    useFetchGifs.mockReturnValue({
      isLoading: true,
      data: [],
    })

    const { getByRole } = render(<GifGrid onDeleteCategory={onDeleteCategoryMock} category={categoryTest} />)

    const headingRendered = getByRole('heading', { level: 2 }) 
    expect( headingRendered.textContent ).toBe( categoryTest );

  })

  test('It must show a button to call onDeleteCategory function', () => {  

    useFetchGifs.mockReturnValue({
      isLoading: true,
      data: [],
    })

    const { getByRole } = render(<GifGrid onDeleteCategory={onDeleteCategoryMock} category={categoryTest} />)

    const buttonRender = getByRole('button');
    expect( buttonRender.textContent ).toBe('Eliminar');

    fireEvent.click( buttonRender )
    expect(onDeleteCategoryMock).toHaveBeenCalledWith( categoryTest );

  });

  test('it must show loading message if it is loading', () => {

    useFetchGifs.mockReturnValue({
      isLoading: true,
      data: [],
    })

    render(<GifGrid onDeleteCategory={onDeleteCategoryMock} category={categoryTest} />)

    expect( screen.getByText('Cargando...')).toBeTruthy();
  });

  test('it must show gifs when is not loadgin', () => {

    const gifs = [
      {
        id: 1,
        images: { original: { url: 'https://gif-example-1.gif'}}
      },
      {
        id: 2,
        images: { original: { url: 'https://gif-example-2.gif'}}
      },
    ]

    useFetchGifs.mockReturnValue({
      isLoading: false,
      data: gifs
    })

    render(<GifGrid onDeleteCategory={onDeleteCategoryMock} category={categoryTest} />)

    expect( screen.getAllByRole('img').length ).toBe( gifs.length );

  });

})