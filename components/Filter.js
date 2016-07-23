import React, { PropTypes } from 'react';

import NavLink from './NavLink';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../modules/constant';

const Filter = ({ filter, children }) => (
  <NavLink to={filter === SHOW_ALL ? '' : filter}>
    {children}
  </NavLink>
);

Filter.propTypes = {
  filter: PropTypes.oneOf([SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]).isRequired,
  children: PropTypes.node.isRequired
};

export default Filter;
