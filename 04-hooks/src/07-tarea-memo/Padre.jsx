import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {

  const numbers = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(1);

  const increment = useCallback(( newValue ) => setValue( value => value + newValue), []);

  return (
    <>
      <h1 className="heading">Ejercicio - useCallback</h1>

      <p>Valor actual: {value}</p>

      {
        numbers.map( n => (
          <Hijo
            key={n}
            value={n}
            increment={increment}
          />
        ))
      }

    </>
  )
}
