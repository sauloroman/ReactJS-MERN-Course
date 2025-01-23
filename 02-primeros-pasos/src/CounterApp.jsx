import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value)

  const onIncreaseCounter = () => {
    setCounter( counter => counter + 1 )
  }

  const onDecreaseCounter = () => {
    if ( counter === 1 ) return
    setCounter( counter =>  counter - 1 )
  }

  const onResetCounter = () => setCounter(value)

  return (
    <div>
      <h1>{counter}</h1>
      
      <button onClick={ onDecreaseCounter }>-1</button>
      <button onClick={ onResetCounter}>Reset</button>
      <button onClick={ onIncreaseCounter }>+1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}