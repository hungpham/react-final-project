import React, { PropTypes } from 'react';

const Todo = ({ id, onToggle, completed, text }) => (
  <li
    onClick={onToggle.bind(null, id)}
    className={completed ? 'is-completed' : ''}
  >
    {text}
  </li>
);

Todo.propTypes = {
  id: PropTypes.string,
  onToggle: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string
};

export default Todo;
