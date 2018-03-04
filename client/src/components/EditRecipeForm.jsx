import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
/**
 *
 *
 * @export
 * @class EditRecipeForm
 * @extends {PureComponent}
 */
class EditRecipeForm extends PureComponent {
  /**
   *
   * @returns {void}
   *
   * @memberOf EditRecipeForm
   */
  componentDidMount() {
    if (this.props.recipes.length < 1) {
      this.props.redirectUser('/catalog');
    }
  }
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
      <div className="col-md-9 catalog-left">
        <div className="text-left">
          <Link to="/catalog" className="btn btn-info">Back to Catalog</Link>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title text-center">
              Edit Recipe
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
    );
  }
}

EditRecipeForm.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  redirectUser: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { recipes, id } = ownProps;
  const recipe = recipes.filter(recp => recp.id === parseInt(id, 10))[0];
  return {
    initialValues: recipe,
  };
};

const connectReduxForm = reduxForm({
  form: 'updateRecipe',
  enableReinitialize: true,
})(EditRecipeForm);

export default connect(mapStateToProps)(connectReduxForm);
