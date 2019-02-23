import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';

const App = () => (
  <Router>
      <Fragment>
          <Switch>
            <Route path="/" component={Login} exact />
          </Switch>
      </Fragment>
  </Router>
);

export default App;
