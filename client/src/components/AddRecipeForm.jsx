import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import {
  BtnHome,
  BtnManageRecipes,
  BtnFavorites,
  BtnProfile,
  BtnCatalog,
  BtnCancel
} from './Buttons';

const BtnCurrent = (() => (
  'Add new recipe'
));
/**
 * @class AddRecipeForm
 * @extends {PureComponent}
 */
class AddRecipeForm extends PureComponent {
  /** html component to render
   *
   * @memberOf AddRecipeForm
   * @returns {void}
   */
  render() {
    const { image, uploadImage } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <BtnCatalog />
          <BtnManageRecipes />
          <BtnFavorites />
          <BtnProfile />
          <BtnCancel />
        </div>
        <div className="current-page btn-buttons"><BtnCurrent /></div>
        <div className="container add-recipe-page">
          <div className="col-md-12 latest-recipes">
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
                  <label htmlFor="price">Cooking Instructions</label>
                  <Field
                    name="details"
                    component="textarea"
                    className="form-control"
                    id="details-text-area"
                    rows="5"
                    placeholder="How to make this..."
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
