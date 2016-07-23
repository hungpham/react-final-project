import React, { PropTypes } from 'react';

import { SHOW_ALL } from '../modules/constant';
import FilterList from '../containers/FilterList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ params }) => (
  <div className="app">
    <h1>Todo list</h1>

    <AddTodo />
    <VisibleTodoList filter={params.filter || SHOW_ALL} />
    <FilterList />
  </div>
);

App.propTypes = {
  params: PropTypes.object.isRequired
};
export default App;
