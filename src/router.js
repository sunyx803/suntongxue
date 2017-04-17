import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Sunyx from './routes/sun01';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <Route path="/sun" component={Sunyx} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
