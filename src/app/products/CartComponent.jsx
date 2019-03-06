import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import '../style/products.css';

const cartComponent = ({ cart }) => {
  console.log('----->>', cart)
  const listProducts = () => {
    return (
      cart.map(product => (
          <div className="product">
            <div className="product-item hover-effect">
              <Link to={`/product/${product.id}`}>
                <img src={product.productimage} width='300' />
              </Link>
              <Link to={`/product/${product.id}`}>
                <p>{product.productname}</p>
              </Link>
            </div>
          </div>
      ))
    )
  }

  return (
    <>
      <div className='' id="">
        <div className="row">
          {cart.length > 0 && listProducts()}
        </div>
        {cart.length > 0 && <button id='checkoutBtn'>Checkout</button>}
        {cart.length === 0 && <h3>No Item in the cart yet.</h3>}
      </div>
    </>
  )
}

export default cartComponent;
