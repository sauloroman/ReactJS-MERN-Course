import { useLayoutEffect, useState, useRef } from "react"

export const Todo = ({ completed, id, title, userId }) => {
  
  const todoRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  
  useLayoutEffect(() => {
    const { height, width } = todoRef.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [id])

  return (
    <>
      <div data-testid="todo" className={`todo ${completed && 'todo--completed'}`}>
        <p ref={todoRef}>Title: <span data-testid="todo-title">{title}</span></p>
        <p>id: <span data-testid="todo-id">{id}</span></p>
        <p>userId: <span data-testid="todo-userId">{userId}</span></p>
      </div>

      <code>{JSON.stringify( boxSize )}</code>
    </>
  )
}
