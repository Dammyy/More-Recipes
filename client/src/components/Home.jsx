import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
/**
 *
 *
 *
 * @class Home
 * @extends {PureComponent}
 */
export default class Home extends PureComponent {
  /** html component to render
   *
   * @memberOf Home
   *  @returns {void}
   *
   */
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};
