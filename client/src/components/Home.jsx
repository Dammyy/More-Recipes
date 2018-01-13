 import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active (path) {
    // Returns active when the path is equal to the current location
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  render () {
    return (
 <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-md navbar-light bg-faded">
          <div className="header-logo">
            <a className="navbar-brand" href="index.html">
              <img src="img/logo.jpg" width={50} height={50} className="d-inline-block align-top" alt />
              <b>More Recipes<b>
                </b></b></a><b><b>
              </b></b></div><b><b>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="catalog.html">Catalog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="fav.html">Favorites</a>
                  </li>
                  <li className="nav-item" className={this.active('/manage')}>
                   <Link to="/manage">Manage recipes</Link>
                  </li>
                  <li className="nav-item" className={this.active('/catalog')}>
                   <Link to="/catalog">Catalog</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="profile.html">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="signup.html">Sign up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="signin.html">Sign in</a>
                  </li>
                </ul>
				
              </div>
            </b></b></nav><b><b>
           {this.props.children}
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <a href="https://github.com/Dammyy"> <img src="img/github.png" /></a>
                  </div>
                  <div className="col-md-6">
                    <span className="text-muted">Copyright © More Recipes!</span>
                  </div>
                </div>
              </div>
            </footer>
            
          </b></b></div>
          
    );
  }
}
