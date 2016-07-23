import { createStore, applyMiddleware } from 'redux';

import { loadState, saveState } from './localStorage';
import todoAppReducer from './reducers';

const logger = (store) => (next) => (action) => {
  if (!console.group) {
    return next(action);
  }

  console.group(action.type);
  console.info('%c prev state', 'color: grey', store.getState());
  console.info('%c action', 'color: blue', action);
  const result = next(action);
  console.info('%c next state', 'color: green', store.getState());
  console.groupEnd();

  return result;
};

const store = createStore(
  todoAppReducer,
  loadState(),
  applyMiddleware(logger)
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

export default store;
