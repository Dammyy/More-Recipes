import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import AuthCheck from '../utils/authWrapper';

/**
 *
 *
 * @class HomeActionButtons
 * @extends {PureComponent}
 */
export class HomeActionButtons extends PureComponent {
  /**
   *
   * @memberOf HomeActionButtons
   * @returns {void}
   *
   */
  render() {
    const { firstName, logout } = this.props;
    return (
      <div className="publish-recipe">
        <h2>You are logged in as {firstName}</h2>
        <p>
          <Link
            to="/catalog"
            id="btn-browse"
            className="btn btn-post-recipe"
          >
            <i
              className="fa fa-eye"
              aria-hidden="true"
            /> Browse
          </Link>
          <Link
            to="/catalog/manage"
            className="btn btn-post-recipe"
          >
            <i
              className="fa fa-tachometer"
              aria-hidden="true"
            /> Dashboard
          </Link>
          <button
            className="btn btn-logout"
            id="btn-logout"
            onClick={logout}
          >
            <i className="fa fa-power-off" aria-hidden="true" /> Logout
          </button>
        </p>
      </div>
    );
  }
}

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authAddRecipe',

  FailureComponent: () => {
    return (
      <div className="publish-recipe" role="group" aria-label="...">
        <Link
          to="/catalog"
          className="btn btn-signup"
        >
          <i
            className="fa fa-eye"
            aria-hidden="true"
          /> Browse
        </Link>
        <Link
          to="/signup"
          id="signup"
          className="btn btn-signup"
        >Sign Up
        </Link>
        <Link
          to="/login"
          id="btn-login"
          className="btn btn-signin"
        >
        Login
        </Link>
      </div>
    );
  }
};

HomeActionButtons.propTypes = {
  firstName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
export default AuthCheck(options)(HomeActionButtons);
