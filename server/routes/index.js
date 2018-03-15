import recipes from '../controller/recipe';
import users from '../controller/user';
import auth from '../middlewares/auth';
import validateRecipe from '../middlewares/validate-recipe';
import validateUserSignUp from '../middlewares/validate-user-signup';
import validateUserSignIn from '../middlewares/validate-user-signin';
import validateGetRequest from '../middlewares/validate-get-request';
import validateReview from '../middlewares/validate-review';

export default (app) => {
  app.get('/api/v1/recipes/search/:query', recipes.searchRecipes);
  app.post(
    '/api/v1/recipes/:recipeId/reviews',
    auth, validateReview, recipes.postReview
  );
  app.get('/api/v1/reviews/:recipeId/', recipes.getReviews);
  app.post('/api/v1/recipes', auth, validateRecipe, recipes.createRecipes);
  app.get('/api/v1/recipes', recipes.getRecipe);
  app.get('/api/v1/recipes/popular', recipes.getMostFavorited);
  app.put(
    '/api/v1/recipes/:recipeId', auth,
    validateGetRequest, validateRecipe, recipes.updateRecipes
  );
  app.delete(
    '/api/v1/recipes/:recipeId', auth,
    validateGetRequest, recipes.deleteRecipes
  );
  app.get(
    '/api/v1/recipes/:recipeId',
    validateGetRequest, recipes.retrieveRecipes
  );
  app.post('/api/v1/recipes/:recipeId/vote/:type', auth, recipes.voteRecipe);
  app.get('/api/v1/users/:userId/recipes', auth, users.getFavorites);
  app.post('/api/v1/recipes/:recipeId/favorites', auth, recipes.favoriteRecipe);
  app.get(
    '/api/v1/recipes/:userId/favorites/:recipeId',
    auth, recipes.getFavoriteRecipe
  );
  app.get(
    '/api/v1/recipes/popular/upvotes',
    auth, recipes.getMostUpvotes
  );
  app.post('/api/v1/users/signup', validateUserSignUp, users.signUp);
  app.post('/api/v1/users/signin', validateUserSignIn, users.signIn);
  app.get(
    '/api/v1/users/profile/:userId',
    auth, users.userDetails
  );
};
