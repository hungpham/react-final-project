import uuid from 'node-uuid';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './constant';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: uuid.v4(),
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
