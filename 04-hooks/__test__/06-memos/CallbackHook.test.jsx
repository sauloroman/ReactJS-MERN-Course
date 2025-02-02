import { render } from '@testing-library/react'
import { CallbackHook } from '../../src/06-memos/CallbackHook'

describe('Tests in CallbackHook', () => {

  test('It must match with snapshot', () => {
    const { container } = render(<CallbackHook />)
    expect( container ).toMatchSnapshot()
  })

  test('it should display counter value', () => {

    const {getByText} = render(<CallbackHook />)
    const counterEleme = getByText('Counter: 10')
    expect( counterEleme ).toBeTruthy()
  })

})  

