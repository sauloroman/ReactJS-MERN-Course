import React from "react"

export const Hijo = React.memo(({ value, increment }) => {
  return (
    <button className="btn" onClick={() => increment( value )}>
      Incrementar {value}
    </button>
  )
})
