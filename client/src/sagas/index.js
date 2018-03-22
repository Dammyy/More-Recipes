import {
  watchGetRecipes
} from './recipes';

import { watchLogin } from './auth';
/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes(),
    watchLogin()
  ];
}
