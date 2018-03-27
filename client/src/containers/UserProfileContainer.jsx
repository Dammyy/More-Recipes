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
 *
 */
export class UserProfileContainer extends Component {
  /**
   *
   * @memberOf UserProfileContainer
   * @returns {void}
   *
   */
  componentWillMount() {
    this.getUserProfile();
  }
  /**
   *
   * @memberOf UserProfileContainer
   *
   * @returns {void}
   */
  getUserProfile() {
    this.props.userActions.getUserDetails(this.props.userId);
  }

  /**
   *
   * @memberOf UserProfileContainer
   * @returns {void}
   *
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
 * fetches data from state
 * @param   {object} state the state
 *
 * @returns  {object} user
 * @returns  {object} userId
 */
export function mapStateToProps(state) {
  return {
    user: state.getIn(['user', 'user'], Immutable.List()).toJS(),
    userId: state.getIn(['auth', 'userId']),
  };
}
/**
 *
 * @param   {function} dispatch
 *
 * @returns {function} action creators
 */
export function mapDispatchToProps(dispatch) {
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
