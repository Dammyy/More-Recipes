import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
/**
 *
 *
 * @export
 * @class AddRecipeForm
 * @extends {PureComponent}
 */
class AddRecipeForm extends PureComponent {
  /**
   *
   *
   *  @param {any} event
   * @returns {string} redirect
   * @memberOf AddRecipe
   */
  /** html component to render
   *
   *
   * @returns {void}
   *
   * @memberOf AddRecipeForm
   */
  render() {
    const { image, uploadImage } = this.props;
    return (
      <div className="container add-recipe-page">
        <div className="col-md-12 latest-recipes">
          <div className="text-left btn-buttons">
            <Link
              to="/catalog/manage"
              className="btn btn-info"
            >
              Back to My Recipes
            </Link>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title text-center">
                Add a Recipe!
              </h2>
            </div>
            <div className="panel-body">
              <form
                name="form"
                action=""
                onSubmit={this.props.handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="Title">Title</label>
                  <Field
                    name="title"
                    type="text"
                    id="Title"
                    component="input"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ingredients">Ingredients</label>
                  <Field
                    name="ingredients"
                    component="input"
                    className="form-control"
                    placeholder="Ingredients e.g water, potato, rice"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Details</label>
                  <Field
                    name="details"
                    component="textarea"
                    className="form-control"
                    rows="5"
                    placeholder="Recipe details"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <div className="text-center dropup">
                    <button
                      id="button-upload"
                      type="button"
                      className="btn btn-danger"
                      onClick={() => uploadImage()}
                    >
                      Upload <span className="caret" />
                    </button>
                  </div>
                </div>
                <div className="form-group text-center upload-image">
                  <img
                    id="image"
                    className="img-responsive img-upload"
                    alt=""
                    src={image}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Publish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddRecipeForm.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
};

export default reduxForm({ form: 'recipe' })(AddRecipeForm);
