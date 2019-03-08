import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import Notifications from 'react-notify-toast';
import { Link } from 'react-router-dom';
import { constants } from '../common';
import { EllipsisLoaderComponent } from '../common/loaders'
import '../style/products.css';

const methods = {
  componentWillMount({
    fetchStoreData,
    products
  }) {
    if (!products.data) {
      fetchStoreData()
    }
  }
};

/* istanbul ignore next */
const ListProductComponent = ({
  products,
  cart,
  addToCart,
  fetchProductsState,
}) => {
  let sortedData;
  if (products && products.data){
    sortedData = [...products.data].reverse()
  }
  return (
    <>
      <div id="listProducts">
        <Notifications />
        <div id="centerLoader">
          {fetchProductsState === constants.FETCHING_PRODUCTS &&
            <EllipsisLoaderComponent/>
          }
        </div>

        <Link to="/new/product">
          <button id="add-product-btn">Add New Product</button>
        </Link>
        <div className="row">
          {products.data &&
            sortedData.map(product => (
              <div className="product">
                <div className="product-item hover-effect">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.productimage} width='300' />
                  </Link>
                  <Link to={`/product/${product.id}`}>
                    <p>{product.productname}</p>
                    <p>{product.price}</p>
                  </Link>
                  <button onClick={() => addToCart(cart, product)} className='cart-btn'>Add to cart</button>
                  <div className="edit-product-div">
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default lifecycle(methods)(ListProductComponent);
