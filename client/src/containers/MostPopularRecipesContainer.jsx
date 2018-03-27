import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { MostPopularRecipesList } from '../components';
import * as recipesActionCreators from '../actions/recipes';


/**
 *
 *
 * @class MostPopularRecipesContainer
 * @extends {Component}
 */
export class MostPopularRecipesContainer extends Component {
  /**
   *
   * @memberOf MostPopularRecipesContainer
   * @returns {void}
   *
   */
  componentDidMount() {
    this.getMostFavoritedRecipes();
  }

  /**
   *
   * @memberOf MostPopularRecipesContainer
   * @returns {void}
   *
   */
  getMostFavoritedRecipes() {
    this.props.recipesActions.mostFavoritedRecipes();
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf MostPopularRecipesContainer
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <MostPopularRecipesList
          recipes={recipes}
        />
      </div>
    );
  }
}

/**
 * fetches data from state
 * @param   {object} state the state
 *
 * @returns {object} recipes
 */
export function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'popular'], Immutable.List()).toJS()
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
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
  };
}

MostPopularRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostPopularRecipesContainer);
