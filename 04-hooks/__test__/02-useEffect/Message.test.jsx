import { fireEvent, getByTestId, render } from "@testing-library/react"
import { Message } from "../../src/02-useEffect/Message"

describe('Tests in Message component', () => {

  const coords = { x: 0, y: 0 }

  test('it should match with snapshot', () => {
    const { container } = render(<Message />)
    expect( container ).toMatchSnapshot()
  })

  test('It must show the initial state of the component', () => {
    const { getByTestId } = render(<Message />)
    const coordsEle = getByTestId('coords')
    expect( coordsEle.textContent ).toBe( JSON.stringify(coords) )
  })

  test('it must show the new position if the mouse moved', () => {
    const { getByTestId } = render(<Message />)
    fireEvent.mouseMove(document.body, { clientX: 10, clientY: 10 })

    const coordsEle = getByTestId('coords')

    expect( coordsEle.textContent ).toBe( JSON.stringify({ x: 10, y: 10 }))
  })

})