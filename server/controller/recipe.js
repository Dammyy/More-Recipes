import models from '../models/index';

const RecipeModel = models.recipes;
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
    return RecipeModel.all()
      .then(recipe => res.status(200).send(recipe))
      .catch(error => res.status(400).send(error));
  }

  /**
   * @returns {Object} createRecipe
   * @param {param} req
   * @param {param} res
   */
  static createRecipes(req, res) {
    RecipeModel.create({
      title: req.body.title,
      details: req.body.details,
      ingredients: req.body.ingredients,
      userId: req.decoded.id,
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
    RecipeModel.findOne({
      where: {
        id: req.params.recipeId
      }
    }).then((recipe) => {
      if (!recipe) {
        return res.status(404).send({
          message: 'Recipe Not Found',
        });
      }

      if (req.decoded.id !== recipe.userId) {
        return res.status(403).send({
          message: 'You are not authorised to edit this recipe !',
        });
      }

      recipe.updateAttributes({
        title: req.body.title || recipe.title,
        ingredients: req.body.ingredients || recipe.ingredients,
        details: req.body.details || recipe.details,
      })
        .then(() => res.status(200).send(recipe))
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} removeRecipes
   * @param {param} req
   * @param {param} res
   */
  static deleteRecipes(req, res) {
    RecipeModel.destroy({
      where: {
        id: req.params.recipeId
      }
    }).then((recipe) => {
      if (!recipe) {
        return res.status(404).send({
          message: 'Recipe Not Found',
        });
      }
      res.status(204).send('content deleted successfully');
    })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} retrieveRecipes
   * @param {param} req
   * @param {param} res
   */
  static retrieveRecipes(req, res) {
    RecipeModel.findOne({
      where: {
        id: req.params.recipeId
      }
    }).then((recipe) => {
      if (!recipe) {
        return res.status(404).send({
          message: 'Recipe Not Found',
        });
      }
      return res.status(200).send(recipe);
    })
      .catch(error => res.status(400).send(error));
  }
}

export default Recipe;
