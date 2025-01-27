import { useCounter } from '../hooks';

export const CounterAppWithCustomHook = () => {
  const { counter, onDecrementCounter, onIncrementCounter, onResetCounter } =
    useCounter(1);

  return (
    <>
      <h1 className="heading">UseState &mdash; CounterAppCustomHook</h1>

      <div className="counter counter--unique">
        <span data-testid="counter" className="counter__value">{counter}</span>
        <span className="counter__name">Contador</span>

        <div className="counter__buttons">
          <button onClick={() => onIncrementCounter()} className="counter__btn">+1</button>
          <button onClick={onResetCounter} className="counter__btn">Reset</button>
          <button onClick={() => onDecrementCounter()} className="counter__btn">-1</button>
        </div>
      </div>
    </>
  );
};
