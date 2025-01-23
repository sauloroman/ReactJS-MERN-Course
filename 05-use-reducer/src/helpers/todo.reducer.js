export const todoReducer = ( state = [], action ) => {

  switch( action.type ) {
    case '[TODO] - Add New todo':
      return [ ...state, action.payload ]
    case '[TODO] - Delete todo':
      return [ ...state.filter( todo => todo.id !== action.payload )]
    case '[TODO] - Toggle todo':
      return state.map( todo => {
        if ( todo.id === action.payload ) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        }
        return todo
      })
    default: 
      return state
  }

}