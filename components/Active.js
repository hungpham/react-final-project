import React from 'react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Active = () => (
  <div className="app">
    <h1>Todo Active</h1>

    <VisibleTodoList />
  </div>
);

export default Active;
