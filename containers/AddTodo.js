import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../modules/actions';

const AddTodo = ({ dispatch }) => {
  let handeSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements[0];
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
        <input type="text" placeholder="enter todo" />
        <button type="submit" className="button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo);
