import React from 'react';

import Filter from '../components/Filter';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../modules/constant';

const FilterList = () => (
  <div className="filter-list nav nav-pills">
    <Filter filter={SHOW_ALL}>All</Filter>
    <Filter filter={SHOW_ACTIVE}>Active</Filter>
    <Filter filter={SHOW_COMPLETED}>Completed</Filter>
  </div>
);

export default FilterList;
