import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserIsAuthenticated from '../utils/authWrapper';

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
        params={{ id: props.id }}
        onClick={() => props.favoriteRecipe(props.id, props.userId)}
      >
        {props.favorited} <i className="favorited fa fa-heart" /> Favorited
      </button >
    );
  }
  if (props.fav === 'false') {
    return (
      <button
        className="btn btn-favorited"
        params={{ id: props.id }}
        onClick={() => {
        props.favoriteRecipe(props.id, props.userId);
      }}
      >
        <i className="fa fa-heart" /> Add to favorites
      </button >
    );
  }
  return (
    <button
      className="btn btn-favorited"
      params={{ id: props.id }}
      onClick={() => {
      props.favoriteRecipe(props.id, props.userId);
    }}
    >
      <i className="fa fa-heart" /> Add to favorites
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
      return <h1>Recipe Not Found</h1>;
    }
    const {
      title, details, image, ingredients, upvotes, downvotes, favorited
    } = this.props.recipe;
    return (
      <div className="container-fluid">
        <div className="text-left-buttons btn-buttons">
          <Link
            to="/"
            className="btn btn-info btn-manage"
          >
            <i className="fa fa-home" /> Home
          </Link>
          <Link
            to="/catalog"
            className="btn btn-info"
          >
            <i className="fa fa-list-alt" /> Catalog
          </Link>
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
                      <div className="r-d-titles">
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
