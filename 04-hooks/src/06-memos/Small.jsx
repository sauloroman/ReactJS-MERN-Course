import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log('Render Small')
  return (
    <div className="counter">
      <p className="counter__value">{value}</p>
      <div className="counter__name">Contador</div>
    </div>
  )
})
