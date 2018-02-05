import {
  watchGetRecipes
} from './recipes';

import { watchLoginUser } from './auth';
/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes(),
    watchLoginUser()
  ];
}
