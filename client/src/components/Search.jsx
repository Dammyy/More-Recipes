import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import RecipeHome from './RecipeHome';

import {
  BtnHome,
  AuthenticatedBtnAdd,
  AuthenticatedBtnManageRecipes,
  AuthenticatedBtnFavorites,
  BtnCatalog
} from './Buttons';

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
          <BtnHome />
          <AuthenticatedBtnAdd />
          <BtnCatalog />
          <AuthenticatedBtnManageRecipes />
          <AuthenticatedBtnFavorites />
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
