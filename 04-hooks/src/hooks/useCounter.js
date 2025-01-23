import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

  const [counter, setCounter] = useState(initialValue)

  const onIncrementCounter = ( value = 1 ) => {
    setCounter( counter => counter + value )
  }

  const onDecrementCounter = ( value = 1 ) => {
    if ( counter === 0 ) return
    setCounter( counter => counter - value )
  }

  const onResetCounter = () => setCounter(initialValue)

  return {
    // State
    counter,

    // Methods
    onIncrementCounter,
    onDecrementCounter,
    onResetCounter
  }

}