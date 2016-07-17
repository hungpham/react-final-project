import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import {
  LOCAL_STATE_KEY
} from './modules/constant';

import todoApp from './modules/reducers';
import App from './components/App';

let store = createStore(todoApp);

let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.group();
  console.info('logger');
  console.log('previous state:');
  console.log(store.getState());
  console.log('current action:', action.type);
  console.log(action);
  let result = next(action);
  console.log('next state:');
  console.log(store.getState());
  localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(store.getState()));
  console.groupEnd();
  return result;
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
