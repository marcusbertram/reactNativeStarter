import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {AppWithNavigationState} from '../nav/index';
import AppReducer from 'root-reducer/index';

class ReactNativeStarterV1 extends React.Component {
  store = createStore(AppReducer, undefined, compose(applyMiddleware(
    thunk,
    logger
    ),
    autoRehydrate()
  ));

  componentDidMount() {
    persistStore(this.store, { storage: AsyncStorage });
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default ReactNativeStarterV1;
