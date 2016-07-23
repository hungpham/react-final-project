
import {
  ADD_TODO,
  TOGGLE_TODO,
  LOCAL_STATE_KEY
} from '../constant';

let initTodos = [];
let initState = localStorage.getItem(LOCAL_STATE_KEY);
if (initState) {
  initState = JSON.parse(initState);
  if (initState.todos) initTodos = initState.todos;
}

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state = initTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
