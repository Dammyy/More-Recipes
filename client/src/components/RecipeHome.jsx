
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 *
 *
 * @export
 * @class RecipeHome
 * @extends {PureComponent}
 */
class RecipeHome extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeHome
   */
  render() {
    const {
      i, title, toggleModal
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
RecipeHome.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default RecipeHome;
