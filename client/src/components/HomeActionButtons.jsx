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
class HomeActionButtons extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf ActionButtons
   */
  render() {
    const { firstName, logout } = this.props;
    return (
      <div className="publish-recipe">
        <h3>Welcome {firstName}</h3>
        <p>
          <Link
            to="/catalog/add"
            className="btn btn-publish"
          >
        Post a new recipe!
          </Link>
          <button onClick={logout}>Logout</button>
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
      <div className="btn-group" role="group" aria-label="...">
        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        <Link to="/login" className="btn btn-signin">Login</Link>
      </div>
    );
  }
};

HomeActionButtons.propTypes = {
  firstName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
export default AuthCheck(options)(HomeActionButtons);
