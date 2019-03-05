import React from 'react';
import { Redirect } from 'react-router-dom';
import lifecycle from 'react-pure-lifecycle';
import { EllipsisLoaderComponent } from '../common/loaders'
import { constants } from './duck';

const methods = {
  componentDidMount({
    fetchStoreData,
    userData
  }) {
    console.log('-------', userData);
    if (!userData.allUsers) {
      console.log('Yoooo!');
      fetchStoreData();
    }
  }
};

const addUserComponent = ({ addUser, addUserState }) => {
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
  console.log('====-=====', addUserState);
  if (addUserState === constants.ADD_USER_SUCCESS) {
    alert('yo!');
  }
  const submitButton = <button type="submit" className="btn btn-primary">Submit</button>
  return (
    <>
      <form autoComplete="on" onSubmit={onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Full Name" id="fullName" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email Address" id="emailAddress" />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Phone Number" id="phoneNumber" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="password" id="password" />
        </div>
        <div className="form-group">
          <select className="form-control" id="role">
            <option>attendant</option>
            <option>admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userImage">User Image</label>
          <input type="file" className="form-control-file" id="userImage" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default lifecycle(methods)(addUserComponent);
