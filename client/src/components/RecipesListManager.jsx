import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Recipe from './Recipe';

export default class RecipesListManager extends PureComponent {
  render () {
    const { recipes, i, searchBar, setSearchBar, toggleModal, deleteRecipe } = this.props;
    return (
      <div className="container scrollable">
        <div className="row text-left">
          <Link to="/catalog/add" className="btn btn-danger">Add a new Recipe!</Link>
        </div>
        <div className="row">
          <input
            type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} />
        </div>
        <div className="row">
        {
          recipes
            .filter(recipe => recipe.title.toLowerCase().includes(searchBar))
            .map((recipe, i) => {
              return (
                <Recipe  {...recipe}
                  key={recipe.id}
                  i={i}
                  toggleModal={toggleModal}
                  deleteRecipe={deleteRecipe}
                />
              );
            })
        }
        </div>
        <hr />
      </div>

    );
  }
}

const recipeListManager2 = ({ recipes, i, searchBar, setSearchBar, toggleModal, deleteRecipe }) => {
  return (
    <div>
      {recipes}
    </div>
  )
};