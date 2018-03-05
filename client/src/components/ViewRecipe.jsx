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
      title, details, image
    } = this.props.recipe;
    return (
      <div className="container-fluid">
        <div className="text-left">
          <Link to="/catalog" className="btn btn-info">Back</Link>
        </div>
        <div className="row">
          <div className="col-md-9 recipe-display-left">
            <h3 id="latest-h3">{title}</h3>
            <div id="recipe-content">
              <img src={image} alt="" />
              <p>{details}</p>
              <div id="up-down-vote">
                <div id="popular-votes">
                  <li>
                    <Favorite
                      id={this.props.id}
                      favoriteRecipe={this.props.favoriteRecipe}
                      userId={this.props.userId}
                      favorited={this.props.recipe.favorited}
                    />
                  </li><li>Rate:</li>
                  <li>
                    <i className="fa fa-thumbs-up" aria-hidden="true"> 200</i>
                  </li>
                  <li>
                    <i className="fa fa-thumbs-down" aria-hidden="true"> 50</i>
                  </li>
                </div>
              </div>
              <i className="fas fa-thumbs-up" />

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
