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
 * @class Recipes
 * @extends {Component}
 */
class WelcomeTopSectionContainer extends Component {
  /**
   * Creates an instance
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  /**
   *
   *
   * @returns {void}
   * @memberOf HomeRecipes
   */
  logout() {
    this.props.authActions.logout();
    toastr.success('Logout Successful');
    localStorage.removeItem('token');
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf HomeRecipes
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
function mapStateToProps(state) {
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
function mapDispatchToProps(dispatch) {
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
