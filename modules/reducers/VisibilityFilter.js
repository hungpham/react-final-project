import {
  CHANGE_FILTER,
  SHOW_ALL,
  LOCAL_STATE_KEY
} from '../constant';

let initVisibilityFilter = SHOW_ALL;
let initState = localStorage.getItem(LOCAL_STATE_KEY);
if (initState) {
  initState = JSON.parse(initState);
  if (initState.visibilityFilter) initVisibilityFilter = initState.visibilityFilter;
}

const visibilityFilter = (state = initVisibilityFilter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
