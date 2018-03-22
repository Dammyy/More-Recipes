import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

export const BtnCurrent = (() => (
  'Oh no!'
));
const NotFoundPage = () => (
  <div>
    <Navbar />
    <div className="current-page btn-buttons"><BtnCurrent /></div>
    <div className="col-md-12 error-msg">
      <h1>404! Page Not Found</h1>

      <Link
        className="btn btn-primary btn-manage"
        to="/"
      >
        <i className="fa fa-home" /> Homepage
      </Link >
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
