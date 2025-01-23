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
      <div className={`todo ${completed && 'todo--completed'}`}>
        <p ref={todoRef}>Title: <span>{title}</span></p>
        <p>id: <span>{id}</span></p>
        <p>userId: <span>{userId}</span></p>
      </div>

      <code>{JSON.stringify( boxSize )}</code>
    </>
  )
}
