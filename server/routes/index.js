import Recipes from '../controller/recipe';

import users from '../controller/user';

import auth from '../middlewares/auth';

export default (app) => {
  app.post('/api/v1/recipes/:recipeId/reviews', auth, Recipes.postReview);
  app.post('/api/v1/recipes', auth, Recipes.createRecipes);
  app.get('/api/v1/recipes', Recipes.getRecipe);
  app.put('/api/v1/recipes/:recipeId', auth, Recipes.updateRecipes);
  app.delete('/api/v1/recipes/:recipeId', auth, Recipes.deleteRecipes);
  app.get('/api/v1/recipes/:recipeId', Recipes.retrieveRecipes);
  app.post('/api/v1/recipes/:recipeId/vote/:type', auth, Recipes.voteRecipe);
  app.get('/api/v1/users/:userId/recipes', auth, users.getFavorites);
  app.post('/api/v1/recipes/:recipeId/favorites', auth, Recipes.favoriteRecipe);
  app.get('/api/v1/recipes?sort=upvotes&order=desc', auth, Recipes.getMostUpvotes);
  app.post('/api/v1/users/signup', users.signUp);
  app.post('/api/v1/users/signin', users.signIn);
};
