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
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} recipes
 *
*/
  static getRecipe(req, res) {
    const limit = 12;
    let offset = 0;
    RecipeModel.findAndCountAll()
      .then((data) => {
        const { page } = req.query;
        const pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        RecipeModel.all({
          limit,
          offset,
          order: [['createdAt', 'DESC']],
        })
          .then((recipes) => {
            res.status(200).send({
              recipes,
              count: data.count,
              pages
            });
          })
          .catch(error => res.status(400).send(error));
      });
  }
  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} Created recipe
 *
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
      favorited: 0,
      userId: req.decoded.id,
    })
      .then(() => {
        return res.status(201).send({
          message: 'Recipe published successfully',
          statusCode: '201'
        });
      })
      .catch(error => res.status(400).send(error));
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} updated recipe
 *
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
        favorited: recipe.favorited
      })
        .then(() => {
          return res.status(200).send({
            message: 'Recipe updated successfully',
            statusCode: '200'
          });
        });
    })
      .catch(error => res.status(400).send(error));
  }
  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} recipes
 *
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
          statusCode: '200'
        });
      })
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  }
  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} single recipe
 *
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
      return res.status(200).send({
        statusCode: '200',
        recipe
      });
    })
      .catch(error => res.status(404).send(error));
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} review added
 *
   */
  static postReview(req, res) {
    ReviewsModel.create({
      review: req.body.review,
      userId: req.decoded.id,
      recipeId: req.params.recipeId,
      username: req.decoded.firstName.concat(' ').concat(req.decoded.lastName)
    })
      .then((review) => {
        
        res.status(201).send({
          message: 'Review added successfully',
          statusCode: '201',
          review
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
            favorited: recipe.favorited
          });
        });
      })
      .catch(error => res.status(400).send(error));
  }


  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} Recipes reviews
 *
   */
  static getReviews(req, res) {
    ReviewsModel.findAll({
      where: {
        recipeId: req.params.recipeId
      }
    }).then((reviews) => {
      res.status(200).send({
        statusCode: '200',
        reviews
      });
    })
      .catch(error => res.status(400).send(error));
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} favorited recipe
 *
 */
  static favoriteRecipe(req, res) {
    FavoritesModel.find({
      where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      }
    }).then((favorite) => {
      if (favorite) {
        FavoritesModel.destroy({
          where: {
            recipeId: req.params.recipeId,
            userId: req.decoded.id
          }
        }).then(() => {
          RecipeModel.findOne({
            where: {
              id: req.params.recipeId
            }
          }).then((recipe) => {
            recipe.decrement('favorited')
              .then(() => {
                return res.status(200).send({
                  message: 'Removed from favorites',
                  statusCode: '200',
                  recipe
                });
              });
          });
        })
          .catch(error => res.status(400).send(error));
      } else {
        FavoritesModel.create({
          flag: true,
          userId: req.decoded.id,
          recipeId: req.params.recipeId
        })
          .then(() => {
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            }).then((recipe) => {
              recipe.increment('favorited')
                .then(() => {
                  return res.status(201).send({
                    message: 'Favorited',
                    statusCode: '201',
                    recipe
                  });
                });
            });
          })
          .catch(error => res.status(400).send(error));
      }
    });
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} result
 *
   */
  static getFavoriteRecipe(req, res) {
    FavoritesModel.find({
      where: {
        userId: req.params.userId,
        recipeId: req.params.recipeId
      }
    }).then((favorite) => {
      if (favorite) {
        return res.status(200).send({
          message: 'true',
          statusCode: '200'
        });
      }
      return res.status(404).send({
        message: 'false',
        statusCode: '404'
      });
    });
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} voted recipe
 *
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
                recipe.decrement('downvotes');
                recipe.increment('upvotes')
                  .then(() => {
                    return res.status(201).send({
                      statusCode: '201',
                      voteValue: 'true',
                      message: 'Recipe upvoted',
                      recipe
                    });
                  });
              } else if (req.params.type === 'false' && prevVote === true) {
                recipe.decrement('upvotes');
                recipe.increment('downvotes')
                  .then(() => {
                    return res.status(201).send({
                      statusCode: '201',
                      voteValue: 'false',
                      message: 'Recipe downvoted',
                      recipe
                    });
                  });
              } else {
                if (prevVote === true && req.params.type === 'true') {
                  recipe.decrement('upvotes');
                  votes.destroy({
                    where: {
                      userId: votesModel.userId,
                      recipeId: votesModel.recipeId
                    }
                  })
                    .then(() => {
                      return res.status(200).send({
                        statusCode: '200',
                        message: 'Upvote removed',
                        recipe
                      });
                    });
                }
                if (prevVote === false && req.params.type === 'false') {
                  recipe.decrement('downvotes');
                  votes.destroy({
                    where: {
                      userId: votesModel.userId,
                      recipeId: votesModel.recipeId
                    }
                  })
                    .then(() => {
                      return res.status(200).send({
                        statusCode: '200',
                        message: 'Downvote removed',
                        recipe
                      });
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
            RecipeModel.findOne({
              where: {
                id: req.params.recipeId
              }
            })
              .then((recipe) => {
                if (req.params.type === 'true') {
                  recipe.increment('upvotes')
                    .then(() => {
                      return res.status(201).send({
                        statusCode: '201',
                        voteValue: 'true',
                        message: 'Recipe upvoted',
                        recipe
                      });
                    });
                }
                if (req.params.type === 'false') {
                  recipe.increment('downvotes')
                    .then(() => {
                      return res.status(201).send({
                        statusCode: '201',
                        voteValue: 'false',
                        message: 'Recipe downvoted',
                        recipe
                      });
                    });
                }
              });
          });
      }
    });
  }
  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} most upvoted recipes
 *
   */
  static getMostUpvotes(req, res) {
    return RecipeModel.all({
      order: [['upvotes', 'DESC']]
    })
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error));
  }

  /**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} Moat faforited recipes
 *
  */
  static getMostFavorited(req, res) {
    return RecipeModel.all({
      order: [['favorited', 'DESC']]
    })
      .then((recipe) => {
        return res.status(200).json(recipe);
      })
      .catch(error => res.status(400).send(error));
  }

  /**
*
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @returns {Object} Search result
*/
  static searchRecipes(req, res) {
    const query = req.params.query.trim();
    const op = models.Sequelize.Op;
    const condition = {
      [op.or]: {
        title: {
          [op.iLike]: `%${query}%`
        },
        details: {
          [op.iLike]: `%${query}%`
        },
        ingredients: {
          [op.iLike]: `%${query}%`
        },
      }
    };
    RecipeModel.findAll({
      where: condition
    })
      .then((recipes) => {
        if (recipes.length === 0) {
          return res.status(404).send({
            message: 'No Matches Found'
          });
        }
        return res.status(200).send({
          statusCode: '200',
          recipes
        });
      })
      .catch(error => res.status(400).send(error));
  }
}
export default Recipe;
