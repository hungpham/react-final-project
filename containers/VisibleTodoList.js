import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../modules/constant';

import { toggleTodo } from '../modules/actions';
import Todo from '../components/Todo';

const TodoList = ({ todos, ...rest }) => (
  <ol className="order-list">
    {todos.map((todo) =>
      <Todo key={todo.id} {...todo} {...rest} />
    )}
  </ol>
);

TodoList.propTypes = {
  todos: PropTypes.array
};

const getVisibleTodos = (todos, filter) => {
  console.log(filter);
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
