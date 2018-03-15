import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @class Reviews
 * @extends {PureComponent}
 */
class Reviews extends PureComponent {
  /**
   *
   * @memberOf Reviews
   * @returns {void}
   *
   */
  render() {
    const { reviews } = this.props;
    return (
      reviews
        .map((review) => {
          return (
            <div key={review.id} id="recipe-reviews">
              <div id="review">
                {review.review}
              </div>
              <div id="review-author"><small>By </small></div>
            </div>
          );
        })
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default (Reviews);
