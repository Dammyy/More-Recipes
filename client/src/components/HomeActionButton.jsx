import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import UserIsAuthenticated from '../utils/authWrapper';
/**
 *
 *
 * @class ActionButtons
 * @extends {PureComponent}
 */
class ActionButtons extends PureComponent {
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
        <h5>Howdy {firstName}, <span onClick={logout}>Logout</span></h5>
        <Link
          to="/catalog/add"
          className="btn btn-publish"
        >
        Post a new recipe!
        </Link>
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

// We export it
export default UserIsAuthenticated(options)(ActionButtons);
