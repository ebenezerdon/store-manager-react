import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './navbar';
import { Login } from './login';
import { Dashboard } from './dashboard';

const App = () => (
  <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </>
  </Router>
);

export default App;
