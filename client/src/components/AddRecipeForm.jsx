import React, { PureComponent } from 'react';
import { Link } from 'react-router';

/**
 *
 *
 * @export
 * @class AddRecipeForm
 * @extends {PureComponent}
 */
class AddRecipeForm extends PureComponent {
  /** html component to render
   *
   *
   * @returns {void}
   *
   * @memberOf AddRecipeForm
   */
  render() {
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
          <div className="text-left">
            <Link to="/catalog" className="btn btn-info">Back</Link>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title text-center">
              Add a Recipe!
              </h2>
            </div>
            <div className="panel-body">
              <form
                name="product-form"
                action=""
                onSubmit={() => this.props.submit()}
                noValidate
              >
                <div className="form-group text-left">
                  <label htmlFor="Title">Title</label>
                  <input
                    id="Title"
                    type="text"
                    className="form-control"
                    placeholder="Enter the title"
                    onChange={() => this.props.setRecipe()}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="ingredients">Ingredients</label>
                  <textarea
                    id="ingredients"
                    type="text"
                    className="form-control"
                    placeholder="Enter the description"
                    rows="5"
                    onChange={() => this.props.setRecipe()}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="price">Details</label>
                  <input
                    id="details"
                    type="text"
                    className="form-control"
                    placeholder="Enter the details"
                    onChange={() => this.props.setRecipe()}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="picture">Picture</label>
                  <div className="text-center dropup">
                    <button
                      id="button-upload"
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.uploadPicture()}
                    >
                    Upload <span className="caret" />
                    </button>
                  </div>
                </div>
                <div className="form-group text-center">
                  <img
                    id="picture"
                    className="img-responsive img-upload"
                    alt=""
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-submit btn-block"
                >
                Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipeForm;
