import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from './constant';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
};
