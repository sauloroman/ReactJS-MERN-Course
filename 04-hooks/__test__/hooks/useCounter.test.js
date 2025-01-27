import { act, renderHook } from '@testing-library/react'
import { useCounter } from "../../src/hooks/useCounter"

describe('Tests in useCounter', () => {

  const counterValue = 10

  test('it must return the initial state', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, onIncrementCounter, onDecrementCounter, onResetCounter } = result.current
    
    expect( counter ).toBe(1)
    expect( onIncrementCounter ).toEqual( expect.any(Function) )
    expect( onDecrementCounter ).toEqual( expect.any(Function) )
    expect( onResetCounter ).toEqual( expect.any(Function) )
  })

  test('it must increment the counter', () => {
    const { result } = renderHook(() => useCounter( counterValue ))
    const { onIncrementCounter } = result.current

    act(() => {
      onIncrementCounter()
      onIncrementCounter(2)
    })

    expect( result.current.counter ).toBe( counterValue + 3 )
  })

  test('it must decrement the counter', () => {
    const { result } = renderHook(() => useCounter( counterValue ))
    const { onDecrementCounter } = result.current

    act(() => {
      onDecrementCounter()
      onDecrementCounter(2)
    })

    expect( result.current.counter ).toBe( counterValue - 3 )

  })

  test('it must reset the counter', () => {
    const { result } = renderHook(() => useCounter( counterValue ))
    const { onResetCounter } = result.current

    act(() => {
      onResetCounter()
    })

    expect( result.current.counter ).toBe( counterValue )
  })

})