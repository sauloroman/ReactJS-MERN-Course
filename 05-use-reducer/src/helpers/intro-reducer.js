const initialState = [
  {
    id: 1,
    title: 'Recuperar la piedra del alma',
    done: false,
  },
];

const todosReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO]: Add new todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todosReducer();

const newTodo = {
  id: initialState.length + 1,
  title: 'Recuperar la piedra del espacio',
  done: false,
};

const action = { type: '[TODO]: Add new todo', payload: newTodo };

todos = todosReducer(todos, action);

console.log({ todos });
