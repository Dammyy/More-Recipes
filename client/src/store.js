import {
  createStore,
  applyMiddleware
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

/**
   * @returns {Object} store
   */
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(hashHistory);
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, routeMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
