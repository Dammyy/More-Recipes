import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { ViewRecipe, Reviews } from '../components';
import * as recipesActionCreators from '../actions/recipes';
import { AddReviewFormContainer } from '../containers';
import * as reviewsActionCreators from '../actions/reviews';
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
    this.voteRecipe = this.voteRecipe.bind(this);
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf ViewRecipeContainer
   */
  componentWillMount() {
    if (!this.props.userId) {
      this.props.recipesActions.getRecipeNoUserId(this.props.params.id);
    }
    if (this.props.userId) {
      this.props.recipesActions
        .getRecipe(this.props.params.id, this.props.userId);
    }
  }
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Reviews
   */
  componentDidMount() {
    this.props.reviewsActions.getReviews(this.props.params.id);
  }

  /**
   *@returns {void}
   * @param {any} id
   *
   * @memberOf ViewRecipeContainer
   */
  favoriteRecipe(id) {
    this.props.recipesActions.favoriteRecipe(id);
  }

  /**
   * @returns {void}
   *
   * @param {any} id
   * @param {any} voteType
   *
   * @memberOf ViewRecipeContainer
   */
  voteRecipe(id, voteType) {
    this.props.recipesActions.voteRecipe(id, voteType);
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  render() {
    const { reviews, params: { id } } = this.props;
    return (
      <div>
        <ViewRecipe
          recipes={this.props.recipes}
          id={id}
          favoriteRecipe={this.favoriteRecipe}
          userId={this.props.userId}
          voteRecipe={this.voteRecipe}
        />
        <div id="reviews-form">
          <AddReviewFormContainer id={this.props.params.id} />
        </div>
        <div className="reviews">
          <Reviews reviews={reviews} id={this.props.params.id} />
        </div>
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
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    reviews: state.getIn(['reviews', 'reviews'], Immutable.List()).toJS(),
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
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
    reviewsActions: bindActionCreators(reviewsActionCreators, dispatch)
  };
}

ViewRecipeContainer.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  userId: PropTypes.number.isRequired,
  reviewsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRecipeContainer);
