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
  if (props.favorited === 'true') {
    return (
      <button
        className="btn btn-favorited"
        params={{ id: props.id }}
        onClick={() => props.favoriteRecipe(props.id, props.userId)}
      >
        <i className="favorited fa fa-heart" /> Favorited
      </button >
    );
  }
  if (props.favorited === 'false') {
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
  if (props.vote === 'true') {
    return (
      <button
        className="btn btn-favorited"
        params={{ id: props.id }}
        onClick={() => props.favoriteRecipe(props.id, props.userId)}
      >
        <li>
          <i
            className="favorited
            fa fa-thumbs-up"
            aria-hidden="true"
          >{this.props.upvotes}
          </i>
        </li>
        <li>
          <i
            className="fa fa-thumbs-down"
            aria-hidden="true"
          >{this.props.downvotes}
          </i>
        </li>
      </button >
    );
  }
  if (props.vote === 'false') {
    return (
      <button
        className="btn btn-favorited"
        params={{ id: props.id }}
        onClick={() => props.favoriteRecipe(props.id, props.userId)}
      >
        <li>
          <i
            className="fa fa-thumbs-up"
            aria-hidden="true"
          >
            {this.props.upvotes}
          </i>
        </li>
        <li>
          <i
            className="favorited fa fa-thumbs-down"
            aria-hidden="true"
          >{this.props.downvotes}
          </i>
        </li>
      </button >
    );
  }
  return (
    <button
      className="btn btn-favorited"
      params={{ id: props.id }}
      onClick={() => props.favoriteRecipe(props.id, props.userId)}
    >
      <li>
        <i
          className="fa fa-thumbs-up"
          aria-hidden="true"
        >
          {this.props.upvotes}
        </i>
      </li>
      <li>
        <i
          className="fa fa-thumbs-down"
          aria-hidden="true"
        >{this.props.downvotes}
        </i>
      </li>
    </button >
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
      title, details, image, ingredients
    } = this.props.recipe;
    return (
      <div className="container-fluid">
        <div className="text-left-buttons btn-buttons ">
          <Link to="/catalog" className="btn btn-info">Back</Link>
        </div>
        <div className="row">
          <div className="col-md-12 latest-recipes">
            <div id="recipe-display">
              <h2 className="recipe-title">{title}</h2>
              <div id="recipe-content">
                <img src={image} alt="" />
                <div className="recipe-details">
                  <b>Ingredients:</b>
                  <p>{ingredients}</p>
                  <b>Recipe Details:</b>
                  <p>{details}</p>
                </div>
                <div id="up-down-vote">
                  <div id="popular-votes">
                    <li>
                      <Favorite
                        id={this.props.id}
                        favoriteRecipe={this.props.favoriteRecipe}
                        userId={this.props.userId}
                        favorited={this.props.recipe.favorited}
                      />
                    </li>
                    {/* <li>Like: </li> */}
                    {/* <Vote id={this.props.id}
                     userId={this.props.userId} /> */}
                  </div>
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
  userId: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
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
