import React from 'react';
import { Redirect } from 'react-router-dom';
import lifecycle from 'react-pure-lifecycle';
import { EllipsisLoaderComponent } from '../common/loaders'
import { constants } from './duck';
import './addProduct.css';

const methods = {
  componentDidMount({
    fetchStoreData,
    userData,
    products
  }) {
    console.log('-------', products);
    if (!products.data) {
      console.log('Yoooo!');
      fetchStoreData();
    }
  }
};

const AddProductComponent = ({ addProduct, addProductState }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const productDetails = {
      productname: e.target.elements.productName.value.trim(),
      description: e.target.elements.description.value.trim(),
      productimage: 'http://staffmobility.eu/sites/default/files/isewtweetbg.jpg',
      price: e.target.elements.price.value.trim(),
      quantity: e.target.elements.quantity.value.trim(),
      minallowed: e.target.elements.minAllowed.value.trim(),
    }
    addProduct(productDetails);
  };
  console.log('====-=====', addProductState);
  if (addProductState === constants.ADD_PRODUCT_SUCCESS) {
    alert('yo!');
  }
  const submitButton = <button type="submit" className="btn btn-primary">Submit</button>
  return (
    <>
      <form id="addproductForm" autoComplete="on" onSubmit={onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Product Name" id="productName" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Description" id="description" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Price" id="price" />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Quantity" id="quantity" />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Minimum quantiy allowed" id="minAllowed" />
        </div>
        <div id="selectImage">
          <label id="label" htmlFor="productImage">Select product image</label>
          <input type="file" id="productImage" />
        </div>
        <button id="addProductBtn" type="submit">Add product</button>
      </form>
    </>
  );
};

export default lifecycle(methods)(AddProductComponent);
