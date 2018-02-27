import { watchGetRecipes, watchAddRecipe, watchDeleteRecipe, watchUpdateRecipe } from './recipes';
import { watchLoginUser, watchSignupUser } from './auth';
import { watchUploadImage } from './filestack';
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
    watchUpdateRecipe()
  ];
}
