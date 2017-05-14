import React from 'react';
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import {
  connect
} from 'react-redux';
import {
  combineReducers,
} from 'redux';

import LoginScreen from '../login-screen/login-screen.container';
import MainScreen from '../main-screen/main-screen.container';

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});

export const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const initialNavState = {
  index: 1,
  routes: [
    { key: 'InitA', routeName: 'Main' },
    { key: 'InitB', routeName: 'Login' },
  ],
};

const initialAuthState = { isLoggedIn: false };

export const AppReducer = combineReducers({
  nav: (state = initialNavState, action) => {
    if (action.type === 'Login') {
      return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
    }
    if (action.type === 'Logout') {
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
    }
    return AppNavigator.router.getStateForAction(action, state);
  },
  auth: (state = initialAuthState, action) => {
    if (action.type === 'Login') {
      return { ...state, isLoggedIn: true };
    }
    if (action.type === 'Logout') {
      return { ...state, isLoggedIn: false };
    }
    return state;
  },
});
