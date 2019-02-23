import React from 'react';
import { Link } from 'react-router-dom';
import "../style/lib/nav.css"

const NavbarComponent = () => {
  const role = localStorage.getItem('role');
  const loggedIn = localStorage.getItem('accesstoken');
  const logout = () => {
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  }

  return (
    <div className="navbar-component">
      <div className="top-nav">
        <div className="logo">
          <a href="../index.html"><img src="./logo.png" alt="" /></a>
        </div>
        <p id="logoutButton">
          <Link to="/" onClick={logout}>Logout</Link>
        </p>
        <Link to="/dashboard">
          <i className="far fa-user-circle" />
        </Link>
      </div>
      <div className="nav-2">
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
              <div className="icon"><i className="fa fa-search" /></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
