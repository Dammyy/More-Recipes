import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a
              href="https://github.com/Dammyy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="img/github.png" alt="" />
            </a>
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
