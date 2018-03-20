import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import {
  BtnHome,
  AuthenticatedBtnAdd,
  AuthenticatedBtnManageRecipes,
  AuthenticatedBtnFavorites,
  AuthenticatedBtnProfile,
  BtnCatalog,
  BtnCancel
} from './Buttons';

const BtnCurrent = (() => (
  'UPDATE RECIPE'
));
/**
 *
 *
 *
 * @class EditRecipeForm
 * @extends {PureComponent}
 */
class EditRecipeForm extends PureComponent {
  /**
   *
   * @memberOf EditRecipeForm
   * @returns {void}
   *
   */
  componentDidMount() {
    if (!this.props.recipes) {
      this.props.redirectUser('/catalog');
    }
  }


  /**
   *
   *
   * @memberOf EditRecipeForm
   * @returns {void}
   */
  render() {
    const { image, uploadImage } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <AuthenticatedBtnAdd />
          <BtnCatalog />
          <AuthenticatedBtnManageRecipes />
          <AuthenticatedBtnFavorites />
          <AuthenticatedBtnProfile />
          <Link
            className="btn btn-primary"
            to={`view/${this.props.id}`}
            params={{ id: this.props.id }}
          >
          View
          </Link >
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
                <div className="form-group text-center">
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

EditRecipeForm.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  redirectUser: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { recipes, id } = ownProps;
  const recipe = recipes.recipes
    .filter(recp => recp.id === parseInt(id, 10))[0];
  return {
    initialValues: recipe,
  };
};

const connectReduxForm = reduxForm({
  form: 'updateRecipe',
  enableReinitialize: true,
})(EditRecipeForm);

export default connect(mapStateToProps)(connectReduxForm);
