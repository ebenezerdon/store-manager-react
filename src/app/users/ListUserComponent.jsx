import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';
import './listUser.css';

const methods = {
  componentDidMount({
    fetchStoreData,
    userData
  }) {
    if (!userData.allUsers) {
      fetchStoreData()
    }
  }
};

const ListUserComponent = ({
  userData,
  fetchAllUserState,
}) => {
  const listUser = () => {
    const { allUsers } = userData;
    return (
      allUsers.map(user => (
        <>
          <tr>
            <td><Link to={`/user/${user.id}`}>{user.fullname}</Link></td>
            <td>{user.emailaddress}</td>
            <td>{user.phonenumber}</td>
            <td>{user.role}</td>
          </tr>
        </>
      ))
    )
  }

  return (
    <>
      <Link to="/new/user">
          <button id="add-product-btn">Add New User</button>
      </Link>
      <table id="listUserTable" className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>{userData.allUsers && listUser()}</tbody>
      </table>
    </>
  )
}

export default lifecycle(methods)(ListUserComponent);
