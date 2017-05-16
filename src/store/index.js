import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {
  autoRehydrate
} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducer from '../root-reducer/index';
export const configureStore = () => {
  return createStore(AppReducer, undefined, compose(applyMiddleware(
      thunk,
      logger
    ),
    autoRehydrate()
  ));
}
