import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <ul className="unorder-list">
    <li>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </li>
  </ul>
);

export default Footer;
