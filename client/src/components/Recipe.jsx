
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authDeleteRecipe',
  FailureComponent: null
};

const BtnDelete = UserIsAuthenticated(options)(props => (
  <button
    className="btn btn-danger btn-del"
    onClick={() => props.deleteRecipe(props.id)}
  >
  Delete
  </button>));
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
      id, i, title, image, toggleModal, deleteRecipe
    } = this.props;
    let img;
    if (image === '') {
      img = 'img/chicken.jpg';
    } else {
      img = image;
    }
    return (
      <div className="col-md-4 recipe-display">
        <img src={img} alt="" />
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
          <BtnDelete deleteRecipe={deleteRecipe} id={id} />
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
  toggleModal: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
};
export default Recipe;
