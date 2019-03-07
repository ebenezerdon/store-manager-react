import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';
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
const SingleProductComponent = ({
  products,
  cart,
  addToCart,
  fetchProductsState,
}) => {
  const id = location.pathname.split('/')[2];
  let data;
  if ( products && products.data) {
    data = products.data
      .filter( (product) => product.id == id )[0];
    return (
      <>
        <div className="row">
          <div className='product' id="product-item">
          <h1>{data.productname}</h1>
            <figure className="profile">
              <div className="profile-image"><img src={data.productimage}
                alt={`Sample photo of ${data.productname}`} />
              </div>
              <figcaption>
                <p id="desc">{data.description}</p>
                <h3>Quantity in Inventory</h3>
                <h4>{data.quantity}</h4>
                <h3>Minimum Product Quantity</h3>
                <h4>{data.minallowed}</h4>
                <h3>Price</h3>
                <h4>{data.price}</h4>
                <button onClick={() => addToCart(cart, data)} id='cartBtn'>Add to cart</button>
              </figcaption>
            </figure>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <p>Loading...</p>
    </>
  )
}

export default lifecycle(methods)(SingleProductComponent);
