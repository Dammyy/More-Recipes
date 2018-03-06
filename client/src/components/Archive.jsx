import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
/**
 *
 *
 * @export
 * @class Home
 * @extends {PureComponent}
 */
class Archive extends PureComponent {
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
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Archive.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Archive;
