import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas';
import reducer from './reducers';
import authChecker from './utils/authentication';


const initialState = Immutable.fromJS({
  auth: authChecker()
});
/**
   * @returns {Object} store
   */
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(hashHistory);
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, routeMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
