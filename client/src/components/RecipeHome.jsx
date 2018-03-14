import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
      id, title, image, upvotes, downvotes, favorited
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
        </div>
        <div id="recipe-title"><h2>{title}</h2></div>
        <BtnView id={id} />
      </div>
    );
  }
}
RecipeHome.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  favorited: PropTypes.number.isRequired
};

BtnView.propTypes = {
  id: PropTypes.number.isRequired,
};
export default RecipeHome;
