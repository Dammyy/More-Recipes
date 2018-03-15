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
class HomeRecipesContainer extends Component {
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
 *
 *
 * @param {any} state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    firstName: state.getIn(['auth', 'firstName'])
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

HomeRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeRecipesContainer);
