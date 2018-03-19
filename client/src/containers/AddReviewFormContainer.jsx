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
 * @class AddReviewFormContainer
 * @extends {Component}
 */
export class AddReviewFormContainer extends Component {
  /**
   * Creates an instance of AddReviewFormContainer.
   * @param {any} props
   *
   * @memberOf AddReviewFormContainer
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  /**
   * @memberOf AddReviewFormContainer
   *
   * @param {any} event
   *
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.reviewsActions.addReview(this.props.id);
    this.props.resetForm('review');
  }


  /**
   *
   * @memberOf AddReviewFormContainer
   * @returns {void}
   *
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
