
import {
  watchGetRecipes
} from './recipes';
/**
   * @returns {Object} fetch recipes
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes()
  ];
}
