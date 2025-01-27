import { render, screen } from '@testing-library/react'
import { Todo } from '../../src/03-examples/Todo'

describe("Tests in Todo Component", () => {

  const todoTest = {
    id: 1,
    title: "Todo 1",
    userId: 1,
    completed: false,
  }

  test("It must match with snapshot", () => {
    const { container } = render(<Todo {...todoTest} />)
    expect( container ).toMatchSnapshot()
  })

  test("It should show the title, id, and userId of the todo", () => {
    render(<Todo {...todoTest} />)

    const titleEle = screen.getByTestId("todo-title")
    const idEle = screen.getByTestId("todo-id")
    const userIdEle = screen.getByTestId("todo-userId")

    expect( titleEle.textContent ).toBe( todoTest.title )    
    expect( idEle.textContent ).toBe( String(todoTest.id) )    
    expect( userIdEle.textContent ).toBe( String(todoTest.userId) )    

  })

  test('It should add or remove a class depeding on the todo status', () => {

    todoTest.completed = true

    render(<Todo {...todoTest} />)

    const todoEle = screen.getByTestId("todo")

    expect( todoEle.className ).toBe("todo todo--completed")

  })

})