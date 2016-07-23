import { combineReducers } from 'redux';

import todos from './reducers/Todos';

const todoApp = combineReducers({
  todos
});

export default todoApp;
