import { watchGetRecipes, watchAddRecipe } from './recipes';
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
    watchAddRecipe()
  ];
}
