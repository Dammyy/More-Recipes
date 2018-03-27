import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import RecipesListHome from '../components/RecipesListHome';
import * as recipesActionCreators from '../actions/recipes';


/**
 *
 *
 * @class HomeRecipesContainer
 * @extends {Component}
 *
 */
export class HomeRecipesContainer extends Component {
  /**
   *
   * @memberOf HomeRecipesContainer
   * @returns {void}
   *
   */
  componentDidMount() {
    this.getRecipes();
  }


  /**
   *
   * @memberOf HomeRecipesContainer
   *
   * @returns {void}
   */
  getRecipes() {
    this.props.recipesActions.getRecipes(1);
  }


  /**
   *
   * @memberOf HomeRecipesContainer
   * @returns {void}
   *
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <RecipesListHome
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
 * @returns {string} firstName
 * @returns {object} recipes
 */
export function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    firstName: state.getIn(['auth', 'firstName'])
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

HomeRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeRecipesContainer);
