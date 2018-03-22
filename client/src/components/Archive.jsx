import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active (path) {
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
                    <Link to="/manage" className="nav-link">Manage recipes</Link>
                  </li>
                  <li className="nav-item" className={this.active('/catalog')}>
                    <Link to="/catalog" className="nav-link">Catalog</Link>
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 catalog-left">
                  <div id="catalog-search-form">
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                  </div>
                  <div className="col-md-12 latest-recipes">
                  <div className="row">
                    {this.props.children}
                </div>
                </div>
                </div>
                <div className="col-md-3 catalog-right">
                  <h3 id="latest-h3">Popular Recipes</h3>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Awesome chicken </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Grilled turkey </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Awesome chicken </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                </div>
              </div>
            </div>


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
