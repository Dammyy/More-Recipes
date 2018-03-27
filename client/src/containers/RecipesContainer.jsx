import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { RecipesList } from '../components/';
import * as recipesActionCreators from '../actions/recipes';


/**
 *  @param {string} data
 *
 * @class RecipesContainer
 * @extends {Component}
 */
export class RecipesContainer extends Component {
  /**
   * Creates an instance of RecipesContainer.
   * @param {any} props
   *
   * @memberOf RecipesContainer
   */
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }


  /**
   * @memberOf RecipesContainer
   *
   *
   * @returns {void}
   */
  componentDidMount() {
    this.getRecipes();
  }

  /**
   * @memberOf RecipesContainer
   *
   *
   * @returns {void}
   */
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }

  handlePageClick = (data) => {
    const selected = data.selected + 1;
    this.props.recipesActions.getRecipes(selected);
  };
  /**
   * @memberOf RecipesContainer
   *
   * @param {any} id
   * @returns {void}
   *
   */
  deleteRecipe(id) {
    this.props.recipesActions.deleteRecipe(id);
  }


  /**
   *
   *
   * @memberOf RecipesContainer
   *
   * @returns {void}
   *
   */
  render() {
    const { userId } = this.props;
    return (
      <div>
        <RecipesList
          recipes={this.props.recipes.recipes}
          deleteRecipe={this.deleteRecipe}
          userId={userId}
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
 * fetches data from state
 * @param   {object} state the state
 *
 * @returns {object} recipes
 * @returns {string} userId
 */
export function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    userId: state.getIn(['auth', 'userId']),
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

RecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
