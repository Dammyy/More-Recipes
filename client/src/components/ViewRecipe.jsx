import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserIsAuthenticated from '../utils/authWrapper';
import {
  BtnHome,
  AuthenticatedBtnAdd,
  AuthenticatedBtnManageRecipes,
  AuthenticatedBtnFavorites,
  AuthenticatedBtnProfile,
  BtnCatalog,
  AuthenticatedBtnEdit
} from './Buttons';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authDeleteRecipe',
  FailureComponent: null
};

export const Favorite = (props) => {
  if (props.fav === 'true') {
    return (
      <button
        className="btn btn-favorited"
        onClick={() => props.favoriteRecipe(props.id, props.userId)}
      >
        {props.favorited} <i className="fa fa-heart favorited" />
      </button >
    );
  }
  if (props.fav === 'false') {
    return (
      <button
        className="btn btn-favorited"
        onClick={() => {
        props.favoriteRecipe(props.id, props.userId);
      }}
      >
        {props.favorited} <i className="fa fa-heart" />
      </button >
    );
  }
  return (
    <button
      className="btn btn-favorited"
      onClick={() => {
      props.favoriteRecipe(props.id, props.userId);
    }}
    >
      {props.favorited} <i className="fa fa-heart" />
    </button >
  );
};

const AuthenticatedFavorite = UserIsAuthenticated(options)(Favorite);

export const Vote = ((props) => {
  return (
    <div>
      <button
        className="btn btn-favorited"
        id="btn-thumbs-up"
        onClick={() => props.voteRecipe(props.id, 'true')}
      >
        <li>
          <i
            className="fa fa-thumbs-up"
            aria-hidden="true"
          /> {props.upvotes}
        </li>
      </button >
      <button
        className="btn btn-favorited"
        id="btn-thumbs-down"
        onClick={() => props.voteRecipe(props.id, 'false')}
      >
        <li>
          <i
            className="fa fa-thumbs-down"
            aria-hidden="true"
          /> {props.downvotes}
        </li>
      </button >
    </div>
  );
});
const AuthenticatedVote = UserIsAuthenticated(options)(Vote);

/**
 *
 *
 * @class ViewRecipe
 * @extends {PureComponent}
 */
class ViewRecipe extends PureComponent {
  /**
   * @memberOf ViewRecipe
   *
   * @returns {void}
   *
   */
  render() {
    if (!this.props.recipe) {
      return <h1>Loading...</h1>;
    }
    const {
      title, details, image, ingredients, upvotes, downvotes, favorited, userId
    } = this.props.recipe;
    return (
      <div className="container-fluid">
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <AuthenticatedBtnAdd />
          <BtnCatalog />
          <AuthenticatedBtnManageRecipes />
          <AuthenticatedBtnFavorites />
          <AuthenticatedBtnProfile />
          {userId === this.props.userId && <AuthenticatedBtnEdit
            id={this.props.id}
          />}
        </div>
        <div className="row">
          <div className="col-md-12 latest-recipes">
            <div id="recipe-display">
              <h2 className="recipe-title r-d-titles">{title}</h2>
              <div id="recipe-content">
                <div id="img-ing">
                  <div className="row">
                    <div className="col-md-8">
                      <img src={image} alt="" />
                    </div>
                    <div className="col-md-4">
                      <div className="r-d-titles title-ing">
                        <b>Ingredients:</b>
                      </div>
                      <div className="ing-body">
                        <p>{ingredients}</p>
                      </div>
                      <div id="popular-votes">
                        <li>
                          <AuthenticatedFavorite
                            id={this.props.id}
                            favoriteRecipe={this.props.favoriteRecipe}
                            userId={this.props.userId}
                            fav={this.props.recipe.fav}
                            favorited={favorited}
                          />
                        </li>
                        <AuthenticatedVote
                          id={this.props.id}
                          voteRecipe={this.props.voteRecipe}
                          vote={this.props.recipe.vote}
                          upvotes={upvotes}
                          downvotes={downvotes}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-recipe">
                  <div className="r-d-titles">
                    <b>Recipe Details</b>
                  </div>
                  <p>{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewRecipe.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string,
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  voteRecipe: PropTypes.func.isRequired,
  userId: PropTypes.number,
  id: PropTypes.string.isRequired,
};
Favorite.propTypes = {
  favorited: PropTypes.string.isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  userId: PropTypes.number,
  fav: PropTypes.string
};
Favorite.defaultProps = {
  userId: undefined,
  fav: undefined
};
ViewRecipe.defaultProps = {
  title: undefined,
  details: undefined,
  image: undefined,
  userId: undefined
};
Vote.propTypes = {
  voteRecipe: PropTypes.func,
  downvotes: PropTypes.number,
  upvotes: PropTypes.number,
  id: PropTypes.number,
};
Vote.defaultProps = {
  voteRecipe: undefined,
  downvotes: undefined,
  upvotes: undefined,
  id: undefined,
};
export default ViewRecipe;
