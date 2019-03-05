import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './navbar';
import { Login } from './login';
import { Dashboard } from './dashboard';
import { ListProduct } from './products';
import { SaleRecord } from './sales';

const App = () => (
  <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/products" component={ListProduct} exact />
          <Route path="/sales" component={SaleRecord} exact />
        </Switch>
      </>
  </Router>
);

export default App;
