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

const ListProductComponent = ({
  products,
  cart,
  addToCart,
  fetchProductsState,
}) => {
  console.log('111111', cart);
  addToCart = addToCart.bind()
  const listProducts = () => {
    const { data } = products;
    return (
      data.map(product => (
          <div className="product">
            <div className="product-item hover-effect">
              <Link to={`/product/${product.id}`}>
                <img src={product.productimage} width='300' />
              </Link>
              <Link to={`/product/${product.id}`}>
                <p>{product.productname}</p>
              </Link>
              <button onClick={() => addToCart(cart, product)} className='cart-btn'>Add to cart</button>
              <div className="edit-product-div">
              <Link className="edit-link" to={`/edit/${product.id}`}>
                <button className="edit-product">Edit</button>
              </Link>
              <Link className="edit-link" to={`/delete/${product.id}`}>
                <button className="edit-product">Delete</button>
              </Link>
              </div>
            </div>
          </div>
      ))
    )
  }

  return (
    <>
      <div className='' id="">
        <Link to="/new/product">
          <button id="add-product-btn">Add New Product</button>
        </Link>
        <div className="row">
          {products.data && listProducts()}
        </div>
      </div>
    </>
  )
}

export default lifecycle(methods)(ListProductComponent);
