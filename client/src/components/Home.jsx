import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
/**
 *
 *
 * @export
 * @class Home
 * @extends {PureComponent}
 */
export default class Home extends PureComponent {
  /** html component to render
   *
   *
   * @returns {void}
   *
   * @memberOf Home
   */
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a
                  href="https://github.com/Dammyy"
                >
                  <img
                    src="img/github.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6">
                <span className="text-muted">Copyright © More Recipes!</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

Home.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};
