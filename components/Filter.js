import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <ul role="nav" className="unorder-list">
    <li><NavLink to="/all">All</NavLink></li>
    <li><NavLink to="/active" >Active</NavLink></li>
    <li><NavLink to="/completed" >completed</NavLink></li>
  </ul>
);

export default Footer;
