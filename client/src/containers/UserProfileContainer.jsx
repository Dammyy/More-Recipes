import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { UserProfile } from '../components/';
import * as usersActionCreator from '../actions/user';

/**
 *
 *
 * @class UserProfileContainer
 * @extends {Component}
 */
class UserProfileContainer extends Component {
  /**
   *
   *@returns {void}
   *
   * @memberOf UserProfileContainer
   */
  componentWillMount() {
    this.getUserProfile();
  }
  /**
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  getUserProfile() {
    this.props.userActions.getUserDetails(this.props.userId);
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  render() {
    const { user } = this.props;
    return (
      <div>
        <UserProfile
          user={user}
        />
      </div>
    );
  }
}
/**
 *
 * @param {any} state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    user: state.getIn(['user', 'user'], Immutable.List()).toJS(),
    userId: state.getIn(['auth', 'userId']),
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
    userActions: bindActionCreators(usersActionCreator, dispatch)
  };
}

UserProfileContainer.propTypes = {
  userActions: PropTypes.objectOf(PropTypes.func).isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export
default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
