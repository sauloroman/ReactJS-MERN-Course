import { render, screen } from "@testing-library/react"
import { LoadingTodo } from "../../src/03-examples/LoadingTodo"

describe("Tests in LoadingTodo Component", () => {

  test("It must match with snapshot", () => {
    const { container } = render(<LoadingTodo />)
    expect( container ).toMatchSnapshot()
  })

  test("It must show a loading message", () => {
    render(<LoadingTodo />)

    const loadingElement = screen.getByTestId("loading")
    expect( loadingElement.textContent ).toBe("Cargando...")
  })
    
})