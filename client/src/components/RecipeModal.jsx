import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @class RecipeModal
 * @extends {PureComponent}
 */
class RecipeModal extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeModal
   */
  render() {
    const {
      title, details, image
    } = this.props.recipe;
    return (
      <div
        className="modal fade"
        id="recipe-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                X
                </span>
              </button>
              <h4 className="modal-title" id="myModalLabel">{`${title}`}</h4>
            </div>
            <div className="modal-body">
              <div>
                <img src={image} className="img-responsive img-big" alt="" />
              </div>
              <hr />
              <p>{details}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              >
              Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
RecipeModal.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecipeModal;
