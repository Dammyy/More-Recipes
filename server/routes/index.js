import Recipes from '../controller/recipe';
import recipes from '../model/recipe';

export default (app) => {
  app.get('/api/recipes', Recipes.getRecipe);
  app.post('/api/recipes/:recipeId/reviews', Recipes.addReview);
  app.post('/api/recipes', Recipes.createRecipes);
  app.put('/api/recipes/:recipeId', Recipes.updateRecipes);
  app.delete('/api/recipes/:recipeId', Recipes.removeRecipes);
  app.get('/api/recipes/:recipeId', Recipes.retrieveRecipes);
};
