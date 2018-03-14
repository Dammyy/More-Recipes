
import React, { PureComponent } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authDeleteRecipe',
  FailureComponent: null
};


const alert = (callback) => {
  return swal('Are you sure?', {
    buttons: {
      cancel: 'No',
      delete: {
        text: 'Delete it!',
        value: 'delete'
      }
    }
  }).then((value) => {
    if (value === 'delete') {
      callback();
      swal('Deleted!', 'Deleted successfully!', 'success');
    }
  });
};

const BtnDelete = UserIsAuthenticated(options)((props) => {
  return (
    <button
      className="btn btn-danger btn-del"
      onClick={() => alert(() => props.deleteRecipe(props.id))}
    >
      Delete
    </button>);
});

const BtnEdit = UserIsAuthenticated(options)((props) => {
  return (
    <Link
      className="btn btn-primary btn-del"
      to={`edit/${props.id}`}
      params={{ id: props.id }}
    >
      Edit
    </Link >);
});

const BtnView = ((props) => {
  return (
    <Link
      className="btn btn-success btn-view"
      to={`view/${props.id}`}
      params={{ id: props.id }}
    >
      View
    </Link >);
});
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
      id, title, image, upvotes, downvotes, favorited, deleteRecipe
    } = this.props;
    let img;
    if (image === '') {
      img = 'http://wyregate.com/wp-content/uploads/2018/03/recipe.jpg';
    } else {
      img = image;
    }
    return (
      <div className="col-md-4 recipe-display">
        <img src={img} alt="" />
        <div id="votes-del">
          <div id="recipe-votes">
            <li>
              <i className="fa fa-heart" /> {favorited}
            </li>
            <li>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"> {upvotes}
              </i>
            </li>
            <li>
              <i className="fa fa-thumbs-o-down" aria-hidden="true"> {downvotes}
              </i>
            </li>
          </div>
          <BtnEdit id={id} />
          <BtnDelete deleteRecipe={deleteRecipe} id={id} />
        </div>
        <div id="recipe-title"><h2>{title}</h2></div>
        <BtnView id={id} />
      </div>
    );
  }
}
Recipe.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  favorited: PropTypes.number.isRequired
};
BtnView.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Recipe;
