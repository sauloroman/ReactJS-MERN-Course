import { useState } from 'react';

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <>
      <h1 className="heading">UseState &mdash; CounterApp</h1>

      <div className="counters">
        <div className="counter">
          <span className="counter__value">{counter1}</span>
          <span className="counter__name">Contador 1</span>
          <button
            onClick={() =>
              setCounter((current) => ({
                ...current,
                counter1: counter1 + 1,
              }))
            }
            className="counter__btn"
          >
            Aumentar
          </button>
        </div>
        <div className="counter">
          <span className="counter__value">{counter2}</span>
          <span className="counter__name">Contador 2</span>
          <button
            onClick={() =>
              setCounter((current) => ({
                ...current,
                counter2: counter2 + 1,
              }))
            }
            className="counter__btn"
          >
            Aumentar
          </button>
        </div>
        <div className="counter">
          <span className="counter__value">{counter3}</span>
          <span className="counter__name">Contador 3</span>
          <button
            onClick={() =>
              setCounter((current) => ({
                ...current,
                counter3: counter3 + 1,
              }))
            }
            className="counter__btn"
          >
            Aumentar
          </button>
        </div>
      </div>
    </>
  );
};
