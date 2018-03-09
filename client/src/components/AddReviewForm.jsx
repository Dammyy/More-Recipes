import React, { PureComponent } from 'react';
import { Field, reset, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
/**
 *
 *
 * @export
 * @class AddRecipeForm
 * @extends {PureComponent}
 */
class AddReviewForm extends PureComponent {
  /** html component to render
   *
   *
   * @returns {void}
   *
   * @memberOf AddReviewForm
   */
  render() {
    return (

      <div id="recipe-display" className="col-md-12">
        <h2 className="panel-title text-center r-d-titles">
              Leave a review
        </h2>
        <div className="panel-body">
          <form
            name="form"
            action=""
            onSubmit={this.props.handleSubmit}
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
              className="btn btn-primary btn-block"
            >
                Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const afterSubmit = (result, dispatch) =>
  dispatch(reset('review'));

export default reduxForm({
  form: 'review',
  onSubmit: afterSubmit,
})(AddReviewForm);
