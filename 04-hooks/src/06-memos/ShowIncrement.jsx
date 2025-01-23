import React from "react"

export const ShowIncrement = React.memo(({ incrementFn }) => {
  console.log('Render ShowIncrement')
  return (
    <button className="btn" onClick={ () => incrementFn(2) }>Incrementar contador</button>
  )
})
