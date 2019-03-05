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
  const addProduct = () => {
    <form className="reg add-product-className" id="add-product">
      <input type="text" className="reg-input" placeholder="Product Name" id="productname" />
      <input type="text" className="reg-input" placeholder="Description" id="description" />
      <input type="text" className="reg-input" placeholder="Price" id="price" />
      <input type="number" className="reg-input" placeholder="Quantity" id="quantity" />
      <input type="number" className="reg-input" placeholder="Minimum quantiy allowed" id="minallowed" />
      <label for="productimage" className="user-image">Select Product Image</label>
      <button id="upload-image">upload</button> <br></br>
      <input type="file" className="select-user-image" defaultValue="Select product image" id="productimage" />
      <button type="submit" className="btn p-modal">Add product</button>
      <a href="" className="btn p-modal" id="close-modal-btn">Close</a>
    </form>
  }

  const listProducts = () => {
    const { data } = products;
    data.reverse();
    return (
      data.map(product => (
        <>
          <div>
            <div className=''>
              <Link to={`/product/${product.id}`}>
                <img src={product.productimage} width='300' />
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
          <div className="confirm-delete" id={product.id}>
            <h3>Are you sure you want to delete this product?</h3>
            <button id="confirm-delete-btn" onclick='{deleteProduct(product.id)}'>Yes</button>
            <button id="close-delete-modal" onclick='{closeDeleteModal(product.id)}'>No</button>
          </div>
        </>
      ))
    )
  }

  return (
    <>
      <div className='' id="">
        <button className="btn" id="add-product-btn">Add New Product</button>
        {products.data && listProducts()}
      </div>
    </>
  )
}

export default lifecycle(methods)(ListProductComponent);
