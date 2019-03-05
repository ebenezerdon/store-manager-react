import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const role = localStorage.getItem('role');
  const loggedIn = localStorage.getItem('accesstoken');
  const logout = () => {
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  }

  return (
      <div>
        <p id="logoutButton">
          <Link to="/" onClick={logout}>Logout</Link>
        </p>
        <Link to="/dashboard">
          <i className="far fa-user-circle" />
        </Link>
      </div>
  );
}

export default NavbarComponent;
