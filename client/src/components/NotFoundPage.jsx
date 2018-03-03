import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => (
  <div>
    <div className="col-md-12  welcome-msg error-msg">
      <i><h1>404! RECIPE NOT FOUND</h1></i>
    </div>
    <Link
      className="btn btn-primary btn-del"
      to="/"
    >
      Go to homepage
    </Link >
  </div>
);

export default NotFoundPage;
