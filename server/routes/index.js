import Recipes from '../controller/recipe';

import users from '../controller/user';

import auth from '../middlewares/auth';

export default (app) => {
  app.post('/api/v1/recipes/:recipeId/reviews', Recipes.addReview);
  app.post('/api/v1/recipes', auth, Recipes.createRecipes);
  app.get('/api/v1/recipes', Recipes.getRecipe);
  app.put('/api/v1/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/v1/recipes/:recipeId', Recipes.deleteRecipes);
  app.get('/api/v1/recipes/:recipeId', Recipes.retrieveRecipes);
  app.post('/api/v1/users/signup', users.signUp);
  app.post('/api/v1/users/signin', users.signIn);
};
