import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  const increment = useCallback(( value ) => setCounter( counter => counter + value ), []);

  // const increment = ( value ) => {
  //   setCounter( counter => counter + value )
  // }

  return (
    <>
      <h1 className="heading">UseCallback</h1>

      <p className="counter">Counter: {counter}</p>

      <ShowIncrement incrementFn={ increment } />
    </>
  )
}
