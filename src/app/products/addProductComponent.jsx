import React from 'react';
import { Redirect } from 'react-router-dom';
import { EllipsisLoaderComponent } from '../common/loaders'
import { constants } from './duck';

export const addProductComponent = ({ addProduct, addProductState }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const emailaddress = e.target.elements.emailaddress.value.trim();
    const password = e.target.elements.password.value.trim();
    addProduct(emailaddress, password);
  };
  if (addProductState === constants.ADD_PRODUCT_SUCCESS) {
    alert('yo!');
  }
  const submitButton = <button type="submit" className="btn btn-primary">Submit</button>
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
      </form>
    </>
  );
};

export default addProductComponent;
