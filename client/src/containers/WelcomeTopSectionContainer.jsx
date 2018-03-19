import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import WelcomeTopSection from '../components/WelcomeTopSection';
import * as authActionCreators from '../actions/auth';


/**
 *
 *
 * @class WelcomeTopSectionContainer
 * @extends {Component}
 */
export class WelcomeTopSectionContainer extends Component {
  /**
   * Creates an instance of WelcomeTopSectionContainer.
   * @param {any} props
   *
   * @memberOf WelcomeTopSectionContainer
   */
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  /**
   *
   * @memberOf WelcomeTopSectionContainer
   *
   * @returns {void}
   */
  logout() {
    this.props.authActions.logout();
    toastr.success('Logout Successful');
    localStorage.removeItem('token');
  }


  /**
   * @memberOf WelcomeTopSectionContainer
   *
   * @returns {void}
   *
   */
  render() {
    const {
      firstName
    } = this.props;
    return (
      <div>
        <WelcomeTopSection
          firstName={firstName}
          logout={this.logout}
        />
      </div>
    );
  }
}

/**
 *
 *
 * @param {any} state
 * @returns {void}
 */
export function mapStateToProps(state) {
  return {
    firstName: state.getIn(['auth', 'firstName'])
  };
}

/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
export function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch)
  };
}

WelcomeTopSectionContainer.propTypes = {
  authActions: PropTypes.objectOf(PropTypes.func).isRequired,
  firstName: PropTypes.string,
};

WelcomeTopSectionContainer.defaultProps = {
  firstName: 'stuff'
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeTopSectionContainer);
