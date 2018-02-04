// Import the watcher we have just created
import {
  watchGetRecipes
} from './recipes';
/**
   * @returns {Object} fetch recipes
   */
export default function* rootSaga() {
// We start all the sagas in parallel
  yield [
    watchGetRecipes()
  ];
}
