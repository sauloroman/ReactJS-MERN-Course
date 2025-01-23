import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Tests in hook useFetchGifs', () => {

  test('It must return default value', () => {

    const { result } = renderHook( () => useFetchGifs('Goku') )
    const { data, isLoading, hasError } = result.current;

    expect( data ).toBeNull();
    expect( isLoading ).toBeTruthy();
    expect( hasError ).toBeNull();

  });

  test('It must return an array with gifs and isLoading state false', async () => {

    const { result } = renderHook(() => useFetchGifs('Goku'))

    await waitFor(() => {
      expect( result.current.data.length ).toBe(10)
    })

    const { data, isLoading } = result.current

    expect( data.length ).toBe(10)
    expect( isLoading ).toBeFalsy();

  })

})