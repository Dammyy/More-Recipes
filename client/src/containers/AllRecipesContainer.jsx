import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { AllRecipesList } from '../components';
import * as recipesActionCreators from '../actions/recipes';

/**
 *
 * @param {string} data
 * @class AllRecipesContainer
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
   * @returns {void}
   *
   * @memberOf AllRecipesContainer
   */
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }

  handlePageClick = (data) => {
    const selected = data.selected + 1;
    this.props.recipesActions.getRecipes(selected);
  };


  /**
   *
   *
   * @returns {void}
   *
   * @memberOf AllRecipesContainer
   */
  render() {
    return (
      <div>
        <AllRecipesList
          recipes={this.props.recipes.recipes}
        />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakClassName="break-me"
          pageCount={this.props.recipes.pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
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
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipesContainer);
