import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import PropTypes from 'prop-types';
import { AddReviewForm } from '../components';
import * as reviewsActionCreators from '../actions/reviews';
/**
 *
 *
 * @export
 * @class AddReview
 * @extends {Component}
 */
class AddReviewFormContainer extends Component {
  /**
   * Creates an instance of AddReview.
   * @param {any} props
   *
   * @memberOf AddReview
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *
   *
   *  @param {any} event
   * @returns {string} redirect
   * @memberOf AddReview
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.reviewsActions.addReview(this.props.id);
    this.props.resetForm('review');
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf AddReview
   */
  render() {
    return (
      <AddReviewForm
        handleSubmit={this.handleSubmit}
      />);
  }
}

/**
 *
 *
 * @param {any} state
 * @returns {object} image
 */
/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
function mapDispatchToProps(dispatch) {
  return {
    reviewsActions: bindActionCreators(reviewsActionCreators, dispatch),
    resetForm: bindActionCreators(reset, dispatch),
  };
}
AddReviewFormContainer.propTypes = {
  reviewsActions: PropTypes.objectOf(PropTypes.func).isRequired,
  id: PropTypes.string.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddReviewFormContainer);
