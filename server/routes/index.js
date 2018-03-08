import Recipes from '../controller/recipe';
import users from '../controller/user';
import auth from '../middlewares/auth';
import validateRecipe from '../middlewares/validate-recipe';
import validateUserSignUp from '../middlewares/validate-user-signup';
import validateUserSignIn from '../middlewares/validate-user-signin';
import validateGetRequest from '../middlewares/validate-get-request';
import validateReview from '../middlewares/validate-review';


export default (app) => {
  app.get('/api/v1/recipes/search/:query', Recipes.searchRecipes);
  app.post(
    '/api/v1/recipes/:recipeId/reviews',
    auth, validateReview, Recipes.postReview
  );
  app.get('/api/v1/reviews/:recipeId/', Recipes.getReviews);
  app.post('/api/v1/recipes', auth, validateRecipe, Recipes.createRecipes);
  app.get('/api/v1/recipes', Recipes.getRecipe);
  app.get('/api/v1/recipes/popular', Recipes.getMostFavorited);
  app.put(
    '/api/v1/recipes/:recipeId', auth,
    validateGetRequest, validateRecipe, Recipes.updateRecipes
  );
  app.delete(
    '/api/v1/recipes/:recipeId', auth,
    validateGetRequest, Recipes.deleteRecipes
  );
  app.get(
    '/api/v1/recipes/:recipeId',
    validateGetRequest, Recipes.retrieveRecipes
  );
  app.post('/api/v1/recipes/:recipeId/vote/:type', auth, Recipes.voteRecipe);
  app.get('/api/v1/users/:userId/recipes', auth, users.getFavorites);
  app.post('/api/v1/recipes/:recipeId/favorites', auth, Recipes.favoriteRecipe);
  app.get(
    '/api/v1/recipes/:userId/favorites/:recipeId',
    auth, Recipes.getFavoriteRecipe
  );
  app.get(
    '/api/v1/recipes?sort=upvotes&order=desc',
    auth, Recipes.getMostUpvotes
  );
  app.post('/api/v1/users/signup', validateUserSignUp, users.signUp);
  app.post('/api/v1/users/signin', validateUserSignIn, users.signIn);
};
