import {
  watchGetRecipes
} from './recipes';

<<<<<<< HEAD
import { watchLoginUser, watchSignupUser } from './auth';
=======
import { watchLogin } from './auth';
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
/**
   * @returns {Object} root saga
   */
export default function* rootSaga() {
  yield [
    watchGetRecipes(),
<<<<<<< HEAD
    watchLoginUser(),
    watchSignupUser()
=======
    watchLogin()
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
  ];
}
