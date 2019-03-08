import React from 'react';
import Notifications from 'react-notify-toast';
import { EllipsisLoaderComponent } from '../common/loaders'
import { constants } from './duck';

const AddUserComponent = ({ addUser, addUserState }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const userDetails = {
      fullname: e.target.elements.fullName.value.trim(),
      emailaddress: e.target.elements.emailAddress.value.trim(),
      phonenumber: e.target.elements.phoneNumber.value.trim(),
      userimage: e.target.elements.userImage.value.trim(),
      password: e.target.elements.password.value.trim(),
      role: e.target.elements.role.value.trim(),
    }
    addUser(userDetails);
  };
  const submitButton = <button id="addProductBtn" type="submit">Add User</button>
  return (
    <>
      <Notifications />
      <form id="addproductForm" autoComplete="on" onSubmit={onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Full Name" id="fullName" required/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" id="emailAddress" required/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Phone Number" id="phoneNumber" required/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Password" id="password" required/>
        </div>
        <div className="form-group">
          <select className="form-control" id="role">
            <option>attendant</option>
            <option>admin</option>
          </select>
        </div>
        <div id="selectImage">
          <input type="text" placeholder="Input user image url" id="userImage" required/>
        </div>
        {addUserState !== constants.ADDING_USER && submitButton}
        {addUserState === constants.ADDING_USER && <EllipsisLoaderComponent />}
      </form>
    </>
  );
};

export default AddUserComponent;
