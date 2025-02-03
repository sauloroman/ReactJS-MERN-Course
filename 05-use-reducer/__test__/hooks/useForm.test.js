import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Tests in useForm hook', () => {

  const initialState = {
    name: '',
    age: 0,
  }

  test('It must return the initial state', () => {

    const { result } = renderHook(() => useForm( initialState ))
    const { formState, onInputChange, onResetForm } = result.current

    expect( formState ).toEqual( initialState )
  
    expect( onInputChange ).toEqual( expect.any(Function) )
    expect( onResetForm ).toEqual( expect.any(Function) )
  })

  test('it must change the value of the corresponding input', () => {

    const { result } = renderHook(() => useForm( initialState ))
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: {name: 'name', value: 'Roman'} })
    })

    const { name } = result.current

    expect( name ).toBe('Roman')

  })

  test('it should reset the form', () => {

    const { result } = renderHook(() => useForm( initialState ))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({target: {name: 'name', value: 'Roman'}})
      onResetForm()
    })

    const { formState } = result.current

    expect( formState ).toEqual(initialState)

  })

})