import React, { Fragment } from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';

const methods = {
  componentDidMount({
    fetchCurrentUser,
    fetchallUsers,
    fetchSaleRecord,
    fetchProducts,
    userData,
    saleRecord,
    products
  }) {
    if (!userData.currentUser) {
      fetchCurrentUser();
      fetchallUsers();
      fetchSaleRecord();
      fetchProducts();
    }

  }
};

const DashboardComponent = ({userData}) => {
  return(
    <Fragment>
      <div><h1>Hey!</h1></div>
    </Fragment>
  )
}

export default lifecycle(methods)(DashboardComponent);
