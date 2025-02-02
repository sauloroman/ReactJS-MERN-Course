import { fireEvent, render, screen } from '@testing-library/react'
import { ShowIncrement } from '../../src/06-memos/ShowIncrement'

describe('Tests in ShowIncrement', () => {

  const incrementFnMock = jest.fn()

  test('It should match with snapshot', () => {
    const { container } = render(<ShowIncrement incrementFn={incrementFnMock} />)
    expect( container ).toMatchSnapshot()
  })

  test('it should called increment function with an argument of 2', () => {

    render(<ShowIncrement incrementFn={incrementFnMock} />)

    const button = screen.getByText('Incrementar contador')
    fireEvent.click( button )

    expect( incrementFnMock ).toHaveBeenCalledWith(2)

  })

})