import React from 'react';
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <Link to="/" className="nav-link header-logo">
        <img
          src="img/logo.jpg"
          width={50}
          height={50}
          className="navbar-brand"
          alt="logo"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link-c nav-link" href="fav.html">Favorites</a>
          </li>
          <li className="nav-item">
            <Link to="/catalog" className="nav-link-c nav-link">Catalog</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link-c nav-link" href="profile.html">Profile</a>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;

