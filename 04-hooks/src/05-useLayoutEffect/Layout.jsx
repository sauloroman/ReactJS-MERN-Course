import { useCounter, useFetch } from '../hooks';
import { LoadingTodo } from '../03-examples/LoadingTodo';
import { Todo } from '../03-examples/Todo';

export const Layout = () => {
  const { counter, onIncrementCounter, onDecrementCounter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${counter}`
  );

  return (
    <>
      <h1 className="heading">UseFetch &mdash; Multiple Custom Hooks</h1>

      {isLoading && !hasError ? <LoadingTodo /> : <Todo {...data} />}

      <button
        disabled={isLoading}
        onClick={() => onDecrementCounter()}
        className="btn"
      >
        Prev Todo
      </button>
      <button
        disabled={isLoading}
        onClick={() => onIncrementCounter()}
        className="btn"
      >
        Nuevo Todo
      </button>
    </>
  );
};
