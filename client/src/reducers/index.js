import { reducer as toastr } from 'react-redux-toastr';
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import recipes from './recipes';
import auth from './auth';
import routing from './routing';
import filestack from './filestack';
import reviews from './reviews';
import user from './user';

export default combineReducers({
  recipes,
  routing,
  form,
  auth,
  toastr,
  filestack,
  reviews,
  user
});
