import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iterationTimes = 1000 ) => {

  for( let i = 1; i <= iterationTimes; i++ ) {
    console.log('Ahi vamos')
  }

  return `${iterationTimes} iteraciones hechas`
}

export const MemoHook = () => {
  
  const [isShown, setIsShown] = useState(false)
  const { counter, onIncrementCounter } = useCounter(4000)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h2 className="heading">UseMemo</h2>

      <p className="counter__value">Counter: {counter}</p>

      <button className="btn" onClick={ () => onIncrementCounter() }>+1</button>

      <button
        className="btn"
        onClick={ () => setIsShown( !isShown )}
      >Show | Hide {JSON.stringify(isShown)}</button>

      <span>{memorizedValue}</span>
    </>
  )
}
