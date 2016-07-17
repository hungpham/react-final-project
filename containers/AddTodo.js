import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../modules/actions';

let AddTodo = ({ dispatch }) => {

  let handeSubmit = (e) => {
    e.preventDefault();
    let input = e.target.elements[0];

    if (!input.value.trim()) {
      return;
    }

    dispatch(addTodo(input.value));
    input.value = '';
    input.focus();
  };

  return (
    <div>
      <form onSubmit={handeSubmit}>
        <input  type="text" placeholder="enter todo"/>
        <button type="submit" className="button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
