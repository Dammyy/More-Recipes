import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFoundPage = () => (
  <div>
    <Navbar />
    <div className="col-md-12  welcome-msg error-msg">
      <i><h1>404 NOT FOUND</h1></i>
      <Link
        className="btn btn-primary btn-del"
        to="/"
      >
      Go to homepage
      </Link >
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
