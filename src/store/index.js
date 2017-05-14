
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import normalizrMiddleware from 'redux-normalizr-middleware';
import { Map } from 'immutable';

const middlewares = [thunk, normalizrMiddleware()];

export default (defaultState = Map()) => {
  const store = createStore(createRootReducer(), defaultState, composeEnhancers(applyMiddleware(...middlewares)));
  store.asyncReducers = {};
  return store;
};

export const injectAsyncReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createRootReducer(store.asyncReducers));
  return store;
};
