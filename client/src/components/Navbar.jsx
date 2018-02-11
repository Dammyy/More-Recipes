import React from 'react';
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <nav
      className="navbar navbar-toggleable-md navbar-expand-md navbar-light"
    >
      <div className="header-logo">
        <a className="navbar-brand" href="index.html">
          <img
            src="img/logo.jpg"
            width={50}
            height={50}
            className="d-inline-block align-top"
            alt=""
          />
          <b>More Recipes<b />
          </b>
        </a>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="fav.html">Favorites</a>
          </li>
          <li className="nav-item">
            <Link to="/catalog" className="nav-link">Catalog</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="profile.html">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="signup.html">Sign up</a>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;

