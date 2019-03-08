import React from 'react';
import { Link } from 'react-router-dom';
import "../style/lib/nav.css"

const NavbarComponent = () => {
  const loggedIn = localStorage.getItem('accesstoken');
  const logout = () => {
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    window.location.replace('/');
  }

  return (
    <div className="navbar-component">
      <div className="top-nav">
        {loggedIn &&
          <>
            <Link to="/dashboard">
            <i className="far fa-user-circle" />
            </Link>
            <p>
              <Link id="name" to="/" onClick={logout}>Logout</Link>
            </p>
            <p>
              <Link id="name" to="/users">Users</Link>
            </p>
            <p>
              <Link id="name" to="/cart">Cart</Link>
            </p>
            <p>
              <Link id="name" to="/sales">Sale Record</Link>
            </p>
            <p>
              <Link id="name" to="/products">Products</Link>
            </p>
          </>
        }
      </div>
    </div>
  );
}

export default NavbarComponent;
