import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import {
  BtnHome,
  BtnAdd,
  BtnManageRecipes,
  BtnFavorites,
  BtnCatalog
} from './Buttons';

/**
 *
 *
 * @class Reviews
 * @extends {PureComponent}
 */
class UserProfile extends PureComponent {
  /**
   *
   * @memberOf UserProfile
   * @returns {void}
   *
   */
  render() {
    if (!this.props.user) {
      return <h1>Profile Loading...</h1>;
    }
    const { user } = this.props;
    return (
      <div>
        <Navbar />
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <BtnCatalog />
          <BtnAdd />
          <BtnManageRecipes />
          <BtnFavorites />
        </div>
        <div className="profile-display">
          <div className="profile-heading">
            <h2>
              <i className="fa fa-user-o" aria-hidden="true" /> My Details
            </h2>
          </div>
          <p><b>First name:</b> {user.firstName}</p>
          <p><b>Surname:</b> {user.lastName}</p>
          <p><b>Email:</b> {user.email}</p>
          <div className="profile-heading">
            <h2>
              <i className="fa fa-line-chart" aria-hidden="true" /> My Stats
            </h2>
          </div>
          <p><b>Recipes published - </b> {user.recipeCount}</p>
          <p><b>Favorite recipes - </b> {user.favsCount}</p>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default UserProfile;
