import { renderHook, waitFor } from '@testing-library/react'
import { useFetchNew } from '../../src/hooks/useFetchNew'

describe('Tests in useFetch Hook', () => {

  const url = 'https://pokeapi.co/api/v2/pokemon/1'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('it must return the initial state', () => {

    const { result } = renderHook(() => useFetchNew())
    const { data, isLoading, hasError, error } = result.current

    expect( data ).toBeNull()
    expect( isLoading ).toBeTruthy()
    expect( hasError ).toBeFalsy()
    expect( error ).toBeNull()

  })
  
  test('it must fetch url correctly', async () => {

    const { result } = renderHook(() => useFetchNew(url))

    await waitFor(() => {
      expect( result.current.data ).not.toBeNull()
    })

    const { data, isLoading, hasError, error } = result.current

    expect( data.id ).toBe(1)
    expect( isLoading ).toBeFalsy()
    expect( hasError ).toBeFalsy()
    expect( error ).toBeNull()

  })

})  