import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { MyFavoriteRecipes } from '../components';
import * as recipesActionCreators from '../actions/recipes';


/**
 *
 *
 * @class MyFavoriteRecipesContainer
 * @extends {Component}
 */
class MyFavoriteRecipesContainer extends Component {
  /**
   *
   * @memberOf MyFavoriteRecipesContainer
   * @returns {void}
   *
   */
  componentDidMount() {
    this.getMyFavorites();
  }

  /**
   *
   * @memberOf HomeRecipes
   * @returns {void}
   *
   */
  getMyFavorites() {
    this.props.recipesActions.getFavoritedRecipes(this.props.userId);
  }


  /**
   *
   * @memberOf MyFavoriteRecipesContainer
   * @returns {void}
   *
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <MyFavoriteRecipes
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
    recipes: state.getIn(
      ['recipes', 'favoriteRecipes'],
      Immutable.List()
    ).toJS(),
    userId: state.getIn(['auth', 'userId']),
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

MyFavoriteRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFavoriteRecipesContainer);
