import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Tests in useForm hook', () => {

  const initialState = {
    username: '',
    email: ''
  }

  test('it should return the initial value', () => {
    const { result } = renderHook(() => useForm( initialState ))
    const { formState, onInputChange, onResetForm } = result.current

    expect( formState ).toEqual( initialState )
    expect( onInputChange ).toEqual( expect.any(Function) )
    expect( onResetForm ).toEqual( expect.any(Function) )
  })

  test('it should change form state', () => {

    const username = 'Roman Nava'

    const { result } = renderHook(() => useForm( initialState ))
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: {name: 'username', value: username }})
    })

    expect( result.current.username ).toBe( username )

  })

  test('it should reset the state', () => {

    const { result } = renderHook(() => useForm( initialState ))
    const { onResetForm } = result.current

    act(() => onResetForm())

    expect( result.current.formState ).toEqual( initialState )

  })

})