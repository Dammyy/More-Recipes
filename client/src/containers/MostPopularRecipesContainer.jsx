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
 * @class Recipes
 * @extends {Component}
 */
class MostPopularRecipesContainer extends Component {
  /**
   *@returns {void}
   *
   *
   * @memberOf Recipes
   */
  componentDidMount() {
    this.props.recipesActions.mostFavoritedRecipes();
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
 *
 *
 * @param {any} state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'popular'], Immutable.List()).toJS()
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
