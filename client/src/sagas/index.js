import { watchGetRecipes, watchAddRecipe,
  watchDeleteRecipe, watchUpdateRecipe,
  watchGetRecipe, watchFavoriteRecipe,
  watchGetUsersFavorites, watchGetRecipeNoUserId,
  watchGetMostFavoritedRecipes, watchSearchRecipes } from './recipes';
import { watchLoginUser, watchSignupUser } from './auth';
import { watchAddReview, watchGetReviews } from './reviews';
import watchUploadImage from './filestack';
/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes(),
    watchLoginUser(),
    watchSignupUser(),
    watchUploadImage(),
    watchAddRecipe(),
    watchDeleteRecipe(),
    watchUpdateRecipe(),
    watchGetRecipe(),
    watchFavoriteRecipe(),
    watchGetUsersFavorites(),
    watchGetRecipeNoUserId(),
    watchAddReview(),
    watchGetReviews(),
    watchGetMostFavoritedRecipes(),
    watchSearchRecipes()
  ];
}
