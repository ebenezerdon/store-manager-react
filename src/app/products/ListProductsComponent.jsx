import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';
import '../style/products.css';

const methods = {
  componentWillMount({
    fetchStoreData,
    userData,
    products
  }) {
    if (!products.data) {
      fetchStoreData()
    }
  }
};

const ListProductComponent = ({
  products,
  fetchProductsState,
}) => {
  const listProducts = () => {
    const { data } = products;
    data.reverse();
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
              <button className='cart-btn'>Add to cart</button>
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
        <button id="add-product-btn">Add New Product</button>
        <div className="row">
          {products.data && listProducts()}
        </div>
      </div>
    </>
  )
}

export default lifecycle(methods)(ListProductComponent);
