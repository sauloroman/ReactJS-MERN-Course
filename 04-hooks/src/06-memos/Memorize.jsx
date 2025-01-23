import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  
  const { counter, onIncrementCounter } = useCounter(10)
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <h1 className="heading">Memo Function</h1>

      <Small value={counter} />

      <button className="btn" onClick={() => onIncrementCounter()}>+1</button>

      <button onClick={() => setIsShown(!isShown)} className='btn'>Shown | Hidden {JSON.stringify( isShown )}</button>
    </>
  )
}
