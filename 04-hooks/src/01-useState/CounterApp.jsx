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
          <h2 className="counter__value" data-testid="counter-1">{counter1}</h2>
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
            Aumentar 1
          </button>
        </div>
        <div className="counter">
          <h2 className="counter__value" data-testid="counter-2">{counter2}</h2>
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
            Aumentar 2
          </button>
        </div>
        <div className="counter">
          <h2 className="counter__value" data-testid="counter-3">{counter3}</h2>
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
            Aumentar 3
          </button>
        </div>
      </div>
    </>
  );
};
