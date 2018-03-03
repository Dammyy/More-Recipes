import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { ViewRecipe } from '../components';
import * as recipesActionCreators from '../actions/recipes';

/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class ViewRecipeContainer extends Component {
  /**
   *
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super(props);
    this.favoriteRecipe = this.favoriteRecipe.bind(this);
  }

  /**
   *@returns {void}
   *
   *
   * @memberOf ViewRecipeContainer
   */
  componentWillMount() {
    this.props.recipesActions
      .getRecipe(this.props.params.id, this.props.userId);
  }

  /**
   *@returns {void}
   *
   * @param {any} id
   *
   * @memberOf ViewRecipeContainer
   */
  favoriteRecipe(id) {
    this.props.recipesActions.favoriteRecipe(id);
  }
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  render() {
    const { params: { id } } = this.props;
    return (
      <div>
        <ViewRecipe
          recipes={this.props.recipes}
          id={id}
          favoriteRecipe={this.favoriteRecipe}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

/**
 *
 * @param {any} state
 * @returns {void}
 */
const mapStateToProps = (state) => {
  return {
    image: state.getIn(['filestack', 'url'], ''),
    userId: state.getIn(['auth', 'userId']),
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS()
  };
};

/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

ViewRecipeContainer.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRecipeContainer);
