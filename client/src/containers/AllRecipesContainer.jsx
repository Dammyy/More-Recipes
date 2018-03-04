import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { AllRecipesList } from '../components';
import * as recipesActionCreators from '../actions/recipes';

/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class AllRecipesContainer extends Component {
  /**
   *@returns {void}
   *
   *
   * @memberOf Recipes
   */
  componentDidMount() {
    this.getRecipes();
  }

  /**
   *
   *
   * @returns {void}
   * @memberOf HomeRecipes
   */
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }
  /**
   *
   *
   * @param {any} index
   *@returns {void}
   * @memberOf Recipes
   */

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
        <AllRecipesList
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
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
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

AllRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipesContainer);
