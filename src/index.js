import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { configureStore } from './store/index';


import {AppWithNavigationState} from './app/index';


class ReactNativeStarterV1 extends React.Component {
  store = configureStore();

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
