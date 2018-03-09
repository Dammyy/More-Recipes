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
        <div>
          {this.props.children}
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
