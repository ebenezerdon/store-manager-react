import React, { Fragment } from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';

const methods = {
  componentWillMount({
    fetchStoreData,
    userData,
    saleRecord,
    products
  }) {
    if (!userData.currentUser) {
      fetchStoreData()
    }
  }
};

const DashboardComponent = ({
  userData,
  saleRecord,
  products,
  fetchProductsState,
  fetchSaleRecordState
}) => {
  const userProfile = () => {
    const { currentUser } = userData;
    return (
      <div>
        <div>
          <img src= {currentUser.userimage} alt="User Image" />
        </div>
          <h3>{currentUser.fullname}</h3>
          <h4>Store {currentUser.role}</h4>
      </div>
    )
  }

  const latestProducts = () => {
    const { data } = products;
    data.reverse();
    return (
      data.slice(0, 4).map(product => (
        <Link to={`/product/${saleRecord.productid}`}>
          <img src={product.productimage} width='100' />
        </Link>
      ))
    )
  }

  const storeAttendants = () => {
    const { allUsers } = userData;
    allUsers.reverse();
    return (
      allUsers.slice(0, 4).map(user => (
        <li>
        <Link to={`/profile/${user.id}`}>{user.fullname}</Link>
        </li>
      ))
    )
  }

  const sales = () => {
    const { data } = saleRecord;
    data.reverse();
    return (
      data.slice(0, 4).map(saleRecord => (
        <li>
          <Link to={`/product/${saleRecord.productid}`}>{saleRecord.productname}</Link>
        </li>
      ))
    )
  }

  return(
    <Fragment>
      <div id="dashboardColumns">
        <div>
          {userData.currentUser && userProfile()}
        </div>
        <div >
          <div >
            <h3>Latest Products</h3>
            <div className="t-products">
              {products.data && latestProducts()}
            </div>
            <Link to="/products">See All Products</Link>
          </div>
        </div>

        <div >
          <div >
            <h3>Store Attendants</h3>
            <ul >
              {userData.allUsers && storeAttendants()}
            </ul>
            <Link to="/users">See All</Link>
          </div>
        </div>

        <div >
          <div >
            <h3>New Sales</h3>
            <ul >
              {saleRecord.data && sales()}
            </ul>
            <Link to="/sales">See All Sale Record</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default lifecycle(methods)(DashboardComponent);
