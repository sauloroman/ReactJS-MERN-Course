import { fireEvent, render, screen } from "@testing-library/react"
import { FocusScreen } from "../../src/04-useRef/FocusScreen"

describe("Tests in FocusScreen Component", () => {

  test("It must match with snapshot", () => {
    const { container } = render(<FocusScreen />)
    expect( container ).toMatchSnapshot()
  })

  test('it must focus the input field when button is pushed', () => {
    render(<FocusScreen />)

    const button = screen.getByText("Seleccionar el input")
    fireEvent.click( button )

    const inputEle = screen.getByRole('textbox')

    expect( inputEle.focus ).toBeTruthy()

  })

})