import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';

const Completed = () => (
  <div className="app">
    <h1>Todo Completed</h1>

    <VisibleTodoList />
  </div>
);

export default Completed;
