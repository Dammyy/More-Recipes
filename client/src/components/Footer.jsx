import React from 'react';
import { Link } from 'react-router';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link
              to="https://github.com/Dammyy"
            >
              <img src="img/github.png" alt="" />
            </Link>
          </div>
          <div className="col-md-6">
            <span className="text-muted">Copyright © More Recipes!</span>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
