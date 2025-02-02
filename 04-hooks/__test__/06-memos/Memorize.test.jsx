import { fireEvent, render } from '@testing-library/react'
import { useCounter } from '../../src/hooks'
import { Memorize } from '../../src/06-memos/Memorize'

jest.mock('../../src/hooks/useCounter.js')

describe('Tests in Memorize Component', () => {

  const onIncrementCounterMock = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    onIncrementCounter: onIncrementCounterMock
  })

  test('it must match with snapshot', () => {
    const { container } = render(<Memorize />)
    expect( container ).toMatchSnapshot()
  })

  test('it must call onIncrementCounter function', () => {
    const { getByText } = render(<Memorize />)

    const buttonToAdd = getByText('+1')
    fireEvent.click( buttonToAdd )

    expect( onIncrementCounterMock ).toHaveBeenCalled()
  })

  test('it must change the value of the state and the button text', () => {

    const { getByTestId } = render(<Memorize />)

    const buttonStatus = getByTestId('button-change-status')
    
    fireEvent.click( buttonStatus )
    expect( buttonStatus.textContent ).toContain('Shown | Hidden true')
    
    fireEvent.click( buttonStatus )
    expect( buttonStatus.textContent ).toContain('Shown | Hidden false')

  })

})  