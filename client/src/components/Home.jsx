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
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};
