import models from '../models/index';

const RecipeModel = models.recipes;
const ReviewsModel = models.reviews;
const FavoritesModel = models.favorites;
const UpvotesModel = models.upvotes;
const DownvotesModel = models.downvotes;
let minusOne = 0;
/**
 * @class Recipe
 */
class Recipe {
  /**
   * @returns {Object} recipes
   * @param {req} req
   * @param {res} res
   */
  static getRecipe(req, res) {
    return RecipeModel.all()
      .then(recipe => res.status(200).send(recipe))
      .catch(error => res.status(400).send(error));
  }

  /**
   * @returns {Object} createRecipe
   * @param {req} req
   * @param {res} res
   */
  static createRecipes(req, res) {
    RecipeModel.create({
      title: req.body.title,
      details: req.body.details,
      ingredients: req.body.ingredients,
      reviews: 0,
      upvotes: 0,
      downvotes: 0,
      userId: req.decoded.id,
    })
      .then(recipe => res.status(201).send(recipe))
      .catch(error => res.status(400).send(error));
  }


  /**
   * @returns {Object} updateRecipes
   * @param {req} req
   * @param {res} res
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
   * @returns {Object} deleteRecipes
   * @param {req} req
   * @param {res} res
   */
  static deleteRecipes(req, res) {
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
          message: 'You are not authorised to delete this recipe !',
        });
      }
      RecipeModel.destroy({
        where: {
          id: req.params.recipeId
        }
      }).then(() => {
        return res.status(403).send({
          message: 'Recipe deleted successfully !',
        });
      })
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} retrieveRecipes
   * @param {req} req
   * @param {res} res
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

  /**
   * @returns {Object} postReview
   * @param {req} req
   * @param {res} res
   */
  static postReview(req, res) {
    ReviewsModel.create({
      review: req.body.review,
      userId: req.decoded.id,
      recipeId: req.params.recipeId,
    })
      .then(() => {
        res.status(201).send('Review added successfully');
        RecipeModel.findOne({
          where: {
            id: req.params.recipeId
          }
        }).then((recipe) => {
          recipe.updateAttributes({
            title: recipe.title,
            ingredients: recipe.ingredients,
            details: recipe.details,
            reviews: recipe.reviews + 1,
            upvotes: recipe.upvotes,
            downvotes: recipe.downvotes,
          })
            .then(() => res.status(200).send(recipe))
            .catch(error => res.status(400).send(error));
        })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  /**
   * @returns {Object} favoriteRecipe
   * @param {req} req
   * @param {res} res
   */
  static favoriteRecipe(req, res) {
    FavoritesModel.create({
      flag: true,
      userId: req.decoded.id,
      recipeId: req.params.recipeId,
    })
      .then(() => {
        res.status(201).send('Favorite added successfully');
      })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} postReview
   * @param {req} req
   * @param {res} res
   */
  static upvoteRecipe(req, res) {
    DownvotesModel.find({
      where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }
    }).then((downvotes) => {
      if (downvotes) {
        minusOne = 1;
        DownvotesModel.destroy({
          where: {
            userId: req.decoded.id,
            recipeId: req.params.recipeId
          }
        });
      }
      UpvotesModel.find({
        where: {
          userId: req.decoded.id,
          recipeId: req.params.recipeId
        }
      }).then((upvotes) => {
        if (upvotes) {
          return res.status(404).send({
            message: 'Recipe Already Upvoted',
          });
        }
        UpvotesModel.create({
          upvote: 1,
          userId: req.decoded.id,
          recipeId: req.params.recipeId,
        })
          .then(() => {
            res.status(201).send({
              message: 'Recipe Upvoted!',
            });
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            }).then((recipe) => {
              recipe.updateAttributes({
                title: recipe.title,
                ingredients: recipe.ingredients,
                details: recipe.details,
                reviews: recipe.reviews,
                upvotes: recipe.upvotes + 1,
                downvotes: recipe.downvotes - 1,
              })
                .then(() => res.status(200).send(recipe))
                .catch(error => res.status(400).send(error));
            })
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      })
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} postReview
   * @param {req} req
   * @param {res} res
   */
  static downvoteRecipe(req, res) {
    UpvotesModel.find({
      where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }
    }).then((upvotes) => {
      if (upvotes) {
        minusOne = 1;
        UpvotesModel.destroy({
          where: {
            userId: req.decoded.id,
            recipeId: req.params.recipeId
          }
        });
      }
      DownvotesModel.find({
        where: {
          userId: req.decoded.id,
          recipeId: req.params.recipeId
        }
      }).then((downvotes) => {
        if (downvotes) {
          return res.status(404).send({
            message: 'Recipe Already Downvoted',
          });
        }
        DownvotesModel.create({
          downvote: 1,
          userId: req.decoded.id,
          recipeId: req.params.recipeId,
        })
          .then(() => {
            res.status(201).send({
              message: 'Recipe Downvoted!',
            });
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            }).then((recipe) => {
              recipe.updateAttributes({
                title: recipe.title,
                ingredients: recipe.ingredients,
                details: recipe.details,
                reviews: recipe.reviews,
                upvotes: recipe.upvotes - minusOne,
                downvotes: recipe.downvotes + 1,
              })
                .then(() => res.status(200).send(recipe))
                .catch(error => res.status(400).send(error));
            })
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      })
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  }
}

export default Recipe;
