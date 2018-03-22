
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 *
 *
 * @export
 * @class Recipe
 * @extends {PureComponent}
 */
class Recipe extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipe
   */
  render() {
    const {
      id, i, title, toggleModal, deleteRecipe
    } = this.props;
    return (
      <div className="col-md-4 recipe-display">
        <img src="img/chicken.jpg" alt="" />
        <div id="votes-del">
          <div id="recipe-votes">
            <li>
              <i className="fa fa-thumbs-o-up" aria-hidden="true">
              200
              </i>
            </li>
            <li>
              <i className="fa fa-thumbs-o-down" aria-hidden="true">
              505
              </i>
            </li>
          </div>
          <button
            className="btn btn-danger btn-del"
            onClick={() => deleteRecipe(id)}
          >
          Delete
          </button>
        </div>
        <div id="recipe-title"><h2>{title}</h2></div>
        <button
          className="btn btn-success btn-view"
          onClick={() => toggleModal(i)}
        >
        View
        </button>
      </div>
    );
  }
}
Recipe.propTypes = {
  id: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.number.isRequired,
  deleteRecipe: PropTypes.number.isRequired

};
export default Recipe;
