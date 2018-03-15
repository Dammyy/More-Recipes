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
 * @class PopularRecipes
 * @extends {PureComponent}
 */
class PopularRecipes extends PureComponent {
  /**
   *
   * @memberOf RecipeHome
   * @returns {void}
   *
   */
  render() {
    const {
      id, title, image, favorited, upvotes, downvotes
    } = this.props;
    let img;
    if (image === '') {
      img = 'http://wyregate.com/wp-content/uploads/2018/03/recipe.jpg';
    } else {
      img = image;
    }
    return (
      <div className="col-md-4 recipe-display-popular recipe-display">
        <div className="n-of-favorites">
          <b>{favorited}</b> Fans <i className="favorited fa fa-heart" />
        </div>
        <img src={img} alt="" />
        <div id="votes-del">
          <div id="recipe-votes">
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
PopularRecipes.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  favorited: PropTypes.number.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired
};

BtnView.propTypes = {
  id: PropTypes.number.isRequired,
};
export default PopularRecipes;
