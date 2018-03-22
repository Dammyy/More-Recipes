import models from '../models/index';

const RecipeModel = models.recipes;
const ReviewsModel = models.reviews;
const FavoritesModel = models.favorites;
const votesModel = models.votes;
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
      image: req.body.image,
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
          message: 'You are not authorised to edit this recipe',
        });
      }
      recipe.updateAttributes({
        title: req.body.title || recipe.title,
        ingredients: req.body.ingredients || recipe.ingredients,
        details: req.body.details || recipe.details,
        image: req.body.image || recipe.image,
        reviews: recipe.reviews,
        upvotes: recipe.upvotes,
        downvotes: recipe.downvotes,
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
          message: 'You are not authorised to delete this recipe',
        });
      }
      RecipeModel.destroy({
        where: {
          id: req.params.recipeId
        }
      }).then(() => {
        return res.status(200).send({
          message: 'Recipe deleted successfully',
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
      .catch(error => res.status(404).send(error));
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
        res.status(201).send({
          message: 'Review added successfully'
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
            reviews: recipe.reviews + 1,
            upvotes: recipe.upvotes,
            downvotes: recipe.downvotes,
          })
            .then(() => res.status(200).send(recipe));
        });
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
   * @returns {Object} vote
   * @param {req} req
   * @param {res} res
   */
  static voteRecipe(req, res) {
    votesModel.find({
      where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }
    }).then((votes) => {
      if (votes) {
        const prevVote = votes.vote;
        votes.updateAttributes({
          vote: req.params.type,
          userId: votesModel.userId,
          recipeId: votesModel.recipeId
        })
          .then(() => {
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            }).then((recipe) => {
              if (req.params.type === 'true' && prevVote === false) {
                recipe.update({
                  title: recipe.title,
                  ingredients: recipe.ingredients,
                  details: recipe.details,
                  reviews: recipe.reviews,
                  upvotes: recipe.upvotes + 1,
                  downvotes: recipe.downvotes - 1,
                })
                  .then(() => {
                    return res.status(201).send({
                      message: 'Recipe upvoted',
                    });
                  });
              } else if (req.params.type === 'false' && prevVote === true) {
                recipe.update({
                  title: recipe.title,
                  ingredients: recipe.ingredients,
                  details: recipe.details,
                  reviews: recipe.reviews,
                  upvotes: recipe.upvotes - 1,
                  downvotes: recipe.downvotes + 1,
                })
                  .then(() => {
                    return res.status(201).send({
                      message: 'Recipe Downvoted',
                    });
                  });
              } else {
                if (prevVote === true && req.params.type === 'true') {
                  return res.status(400).send({
                    message: 'Recipe Already Upvoted',
                  });
                }
                if (prevVote === false && req.params.type === 'false') {
                  return res.status(400).send({
                    message: 'Recipe Already Downvoted',
                  });
                }
              }
            });
          });
      } else {
        votesModel.create({
          vote: req.params.type,
          userId: req.decoded.id,
          recipeId: req.params.recipeId,
        })
          .then(() => {
            if (req.params.type === true) {
              return res.status(201).send({
                message: 'Recipe Upvoted',
              });
            }
            if (req.params.type === false) {
              return res.status(201).send({
                message: 'Recipe Downvoted',
              });
            }
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            }).then((recipe) => {
              if (req.params.type === 'true') {
                recipe.increment('upvotes')
                  .then(() => res.status(200).send(recipe));
              }
              if (req.params.type === 'false') {
                recipe.increment('downvotes')
                  .then(() => res.status(200).send(recipe));
              }
            });
          });
      }
    });
  }

  /**
   * @returns {Object} get most upvotes
   * @param {req} req
   * @param {res} res
   */
  static getMostUpvotes(req, res) {
    if (req.query.sort && req.query.order) {
      RecipeModel.Recipes.findAll({
        group: 'id',
        order: RecipeModel.sequelize.literal(`max(${req.query.sort}) ${req.query.order.toUpperCase()}`)
      })
        .then(recipes => res.status(200).send(recipes))
        .catch(error => res.status(400).send(error));
    }
  }
}
export default Recipe;
