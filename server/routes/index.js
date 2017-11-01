import Recipes from '../controller/recipe';

import users from '../controller/user';



export default (app) => {
  app.get('/api/v1/recipes', Recipes.getRecipe);
  app.post('/api/v1/recipes/:recipeId/reviews', Recipes.addReview);
  app.post('/api/v1/recipes', Recipes.createRecipes);
  app.put('/api/v1/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/v1/recipes/:recipeId', Recipes.deleteRecipes);
  app.get('/api/v1/recipes/:recipeId', Recipes.retrieveRecipes);
  app.post('/api/v1/users/signup', users.signUp);
  app.post('/api/v1/users/signin', users.signIn);
};
