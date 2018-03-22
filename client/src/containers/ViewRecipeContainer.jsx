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
 * @class ViewRecipeContainer
 * @extends {Component}
 */
export class ViewRecipeContainer extends Component {
  /**
   * Creates an instance of ViewRecipeContainer.
   * @param {any} props
   *
   * @memberOf ViewRecipeContainer
   */
  constructor(props) {
    super(props);
    this.favoriteRecipe = this.favoriteRecipe.bind(this);
    this.voteRecipe = this.voteRecipe.bind(this);
  }

  /**
   *
   *
   * @memberOf ViewRecipeContainer
   * @returns {void}
   *
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
   *
   * @memberOf Reviews
   *
   *  @returns {void}
   */
  componentDidMount() {
    this.props.reviewsActions.getReviews(this.props.params.id);
  }

  /**
   * @memberOf ViewRecipeContainer
   * @param {any} id
   * @returns {void}
   *
   */
  favoriteRecipe(id) {
    this.props.recipesActions.favoriteRecipe(id);
  }

  /**
   *
   * @memberOf ViewRecipeContainer
   * @param {any} id
   * @param {any} voteType
   * @returns {void}
   *
   */
  voteRecipe(id, voteType) {
    this.props.recipesActions.voteRecipe(id, voteType);
  }

  /**
   *
   *
   * @memberOf ViewRecipeContainer
   * @returns {void}
   *
   */
  render() {
    const { reviews, params: { id } } = this.props;
    return (
      <div>
        <ViewRecipe
          recipe={this.props.recipe}
          id={id}
          favoriteRecipe={this.favoriteRecipe}
          userId={this.props.userId}
          voteRecipe={this.voteRecipe}
        />
        <div id="reviews-form">
          <AddReviewFormContainer id={this.props.params.id} />
          <div className="reviews">
            <div className="current-page btn-buttons">Reviews</div>
            <Reviews reviews={reviews} id={this.props.params.id} />
          </div>
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
export const mapStateToProps = (state) => {
  return {
    image: state.getIn(['filestack', 'url'], ''),
    userId: state.getIn(['auth', 'userId']),
    recipe: state.getIn(['recipes', 'singleRecipe'], Immutable.List()).toJS(),
    reviews: state.getIn(['reviews', 'reviews'], Immutable.List()).toJS(),
  };
};

/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
export function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
    reviewsActions: bindActionCreators(reviewsActionCreators, dispatch)
  };
}

ViewRecipeContainer.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  favoriteRecipe: PropTypes.func,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  userId: PropTypes.number,
  reviewsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
};

ViewRecipeContainer.defaultProps = {
  favoriteRecipe: undefined,
  userId: undefined,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRecipeContainer);
