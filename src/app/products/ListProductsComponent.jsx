import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';

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
          <div className="col-md-3 col-sm-4 col-s-6">
            <div>
              <Link to={`/product/${product.id}`}>
                <img className="img-fluid img-thumbnail" src={product.productimage} width='300' />
              </Link>
              <Link to={`/product/${product.id}`}>
                <p>{product.productname}</p>
                <p>{product.price}</p>
                <p>{product.id}</p>
              </Link>
              <button className=''>Add to cart</button>
              <div>
                <Link to={`/edit/${product.id}`}>Edit</Link>
                <Link to={`/delete/${product.id}`}>Delete</Link>
              </div>
            </div>
          </div>
      ))
    )
  }

  return (
    <>
      <div className='' id="">
        <button className="btn" id="add-product-btn">Add New Product</button>
        <div className="row">
          {products.data && listProducts()}
        </div>
      </div>
    </>
  )
}

export default lifecycle(methods)(ListProductComponent);
