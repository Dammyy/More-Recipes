// Import the combineReducers function
import { combineReducers } from 'redux-immutable';
// Import our reducers function from here
import recipes from './recipes';

// combineReducers merges them all!
export default combineReducers({
  recipes
});
