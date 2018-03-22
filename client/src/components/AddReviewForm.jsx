import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authRecipeButtons',
  FailureComponent: null
};

export const AddReviewForm = (props => (
  <div id="recipe-display" className="col-md-12">
    <h2 className="panel-title text-center r-d-titles">
    Leave a review
    </h2>
    <div className="panel-body">
      <form
        name="form"
        action=""
        onSubmit={props.handleSubmit}
        noValidate
      >
        <div className="form-group">
          <Field
            name="review"
            type="text"
            id="review-input-field"
            component="textarea"
            className="form-control"
            placeholder="Leave a Review"
          />
        </div>
        <button
          type="submit"
          id="submit-review"
          className="btn btn-primary btn-block"
        >
        Submit
        </button>
      </form>
    </div>
  </div>
));

const AuthenticatedAddReviewForm = UserIsAuthenticated(options)(AddReviewForm);

AddReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'review' })(AuthenticatedAddReviewForm);
