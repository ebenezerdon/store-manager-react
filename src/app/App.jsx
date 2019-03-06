import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './navbar';
import { Login } from './login';
import { Dashboard } from './dashboard';
import { ListProduct } from './products';
import { SaleRecord } from './sales';
import { ListUser } from './users';
import { AddUser } from './users';
import { AddProduct, Cart } from './products';

const App = () => (
  <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/products" component={ListProduct} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/sales" component={SaleRecord} exact />
          <Route path="/users" component={ListUser} exact />
          <Route path="/new/product" component={AddProduct} exact />
          <Route path="/new/user" component={AddUser} exact />
        </Switch>
      </>
  </Router>
);

export default App;
