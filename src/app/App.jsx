import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './navbar';
import { Login } from './login';

const App = () => (
  <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
      </>
  </Router>
);

export default App;
