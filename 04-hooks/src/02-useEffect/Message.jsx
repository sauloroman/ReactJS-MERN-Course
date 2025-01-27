import { useEffect, useState } from "react"

export const Message = () => {
  
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const onMouseMove = (event) => {
      const { clientX, clientY } = event
      setCoords({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', onMouseMove )

    return () => {
      window.removeEventListener('mousemove', onMouseMove )
    }

  }, [])

  return (
    <p>Coordenadas: <span data-testid="coords">{ JSON.stringify( coords ) }</span></p>
  )
}
