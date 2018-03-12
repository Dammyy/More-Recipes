import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserIsAuthenticated from '../utils/authWrapper';
import {
  BtnHome,
  BtnAdd,
  BtnManageRecipes,
  BtnFavorites,
  BtnProfile,
  BtnCatalog,
  BtnEdit
} from './Buttons';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authDeleteRecipe',
  FailureComponent: null
};

const Favorite = UserIsAuthenticated(options)((props) => {
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
});

const Vote = UserIsAuthenticated(options)((props) => {
  return (
    <div>
      <button
        className="btn btn-favorited"
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

/**
 *
 *
 * @className ViewRecipe
 * @extends {PureComponent}
 */
class ViewRecipe extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf ViewRecipe
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
          <BtnAdd />
          <BtnCatalog />
          <BtnManageRecipes />
          <BtnFavorites />
          <BtnProfile />
          {userId === this.props.userId && <BtnEdit
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
                          <Favorite
                            id={this.props.id}
                            favoriteRecipe={this.props.favoriteRecipe}
                            userId={this.props.userId}
                            fav={this.props.recipe.fav}
                            favorited={favorited}
                          />
                        </li>
                        <Vote
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
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  voteRecipe: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    recipes, id, userId, favoriteRecipe
  } = ownProps;
  const recipe = recipes.filter(recp => recp.id === parseInt(id, 10))[0];
  return {
    id,
    userId,
    recipe,
    favoriteRecipe
  };
};

export default connect(mapStateToProps)(ViewRecipe);
