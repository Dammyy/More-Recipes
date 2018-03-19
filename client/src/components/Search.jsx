import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import RecipeHome from './RecipeHome';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authRecipeButtons',
  FailureComponent: null
};

const BtnAdd = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/add"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-pencil-square-o" aria-hidden="true" /> Add Recipe
  </Link>
));
const BtnManageRecipes = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/manage"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-list-alt" aria-hidden="true" /> Manage Recipes
  </Link>
));

const BtnFavorites = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/favorites"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-heart" /> My Favorites
  </Link>
));
/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
export class Search extends PureComponent {
  /**
   *
   *
   * @memberOf Search
   * @returns {void}
   *
   */
  render() {
    const {
      recipes,
    } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <Link
            to="/"
            className="btn btn-info btn-manage"
          >
            <i className="fa fa-home" /> Home
          </Link>
          <BtnAdd />
          <BtnManageRecipes />
          <BtnFavorites />
        </div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
          recipes
            .map((recipe) => {
              return (
                <RecipeHome
                  {...recipe}
                  key={recipe.id}
                />
              );
            })
        }
          </div>
        </div>
      </div>
    );
  }
}

/**
 *
 * @param {any} state
 * @returns {void}
 */
export function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
  };
}

Search.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Search);
