import recipes from '../model/recipe';
import models from '../models/index';

const RecipeModel = models.recipe;
/**
 * @class Recipe
 */
class Recipe {
  /**
   * @returns {Object} recipes
   * @param {*} req
   * @param {*} res
   */
  static getRecipe(req, res) {
    return res.json({
      recipes
    });
  }
  /**
   * @returns {Object} createRecipes
   * @param {param} req
   * @param {param} res
   */
  static createRecipes(req, res) {
    recipes.push({
      id: recipes.length + 1,
      title: req.body.title,
	    details: req.body.details,
      ingredients: req.body.ingredients,
      upvotes: 0,
      downvotes: 0,
      favorited: 0,
      views: 0,
    });
    return res.json({
      message: 'success',
      error: false
    });
  }


  /**
   * @returns {Object} createRecipe
   * @param {param} req
   * @param {param} res
   */
  static createRecipe(req, res) {
    RecipeModel.create({
      title: req.body.title,
      details: req.body.details,
    })
      .then(recipe => res.status(201).send(recipe))
      .catch(error => res.status(400).send(error));
  }


  /**
   * @returns {Object} updateRecipes
   * @param {*} req
   * @param {*} res
   */
  static updateRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes[i].title = req.body.title;
        recipes[i].details = req.body.details;
        recipes[i].ingredients = req.body.ingredients;
        return res.json({
          recipes,
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  /**
   * @returns {Object} removeRecipes
   * @param {param} req
   * @param {param} res
   */
  static removeRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes.splice(i, 1);
        return res.json({
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  /**
   * @returns {Object} retrieveRecipes
   * @param {param} req
   * @param {param} res
   */
  static retrieveRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        return res.json({
          recipes: recipes[i],
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  /**
   * @returns {Object} addReview
   * @param {param} req
   * @param {param} res
   */
  static addReview(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        console.log(recipes);
        recipes[i].reviews.push(req.body.reviews);
        return res.json({
          recipes,
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
}

export default Recipe;
