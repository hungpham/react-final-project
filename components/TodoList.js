import React, { PropTypes } from 'react';

import Todo from './Todo';

const TodoList = ({ todos, ...rest }) => (
  <ol className="order-list">
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} {...rest}/>
    )}
  </ol>
);

TodoList.propTypes = {
  todos: PropTypes.array
};

export default TodoList;
