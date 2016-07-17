import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import All from '../components/All';
import Active from '../components/Active';
import Completed from '../components/Completed';

module.exports = (
  	<Route path="/" component={App}>
      <Route path="/all" component={All}/>
      <Route path="/active" component={Active}/>
  		<Route path="/completed" component={Completed}/>
  	</Route>
);
