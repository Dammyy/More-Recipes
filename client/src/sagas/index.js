import * as recipeWatchers from './recipes';
import { watchLoginUser, watchSignupUser } from './auth';
import { watchAddReview, watchGetReviews } from './reviews';
import watchUploadImage from './filestack';
import watchUsersDetails from './user';

/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    recipeWatchers.watchGetRecipes(),
    watchLoginUser(),
    watchSignupUser(),
    watchUploadImage(),
    recipeWatchers.watchAddRecipe(),
    recipeWatchers.watchDeleteRecipe(),
    recipeWatchers.watchUpdateRecipe(),
    recipeWatchers.watchGetRecipe(),
    recipeWatchers.watchFavoriteRecipe(),
    recipeWatchers.watchGetUsersFavorites(),
    recipeWatchers.watchGetRecipeNoUserId(),
    watchAddReview(),
    watchGetReviews(),
    recipeWatchers.watchGetMostFavoritedRecipes(),
    recipeWatchers.watchSearchRecipes(),
    recipeWatchers.watchVoteRecipe(),
    watchUsersDetails()
  ];
}
