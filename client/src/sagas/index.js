import {
  watchGetRecipes
} from './recipes';

import { watchLoginUser, watchSignupUser } from './auth';
/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes(),
    watchLoginUser(),
    watchSignupUser()
  ];
}
