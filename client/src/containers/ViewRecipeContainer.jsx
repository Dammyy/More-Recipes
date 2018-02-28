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
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
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
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRecipeContainer);
