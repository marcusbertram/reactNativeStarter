import React from 'react';
import {NavigationActions, addNavigationHelpers, StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import LoginScreen from '../login-screen/login-screen.container';
import MainScreen from '../main-screen/main-screen.container';

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: MainScreen
  }
});

export const AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(({dispatch, nav}) => (<AppNavigator
  navigation={addNavigationHelpers({dispatch, state: nav})}
/>));

const initialNavState = {
  index: 1,
  routes: [
    {
      key: 'initAuth',
      routeName: 'Main'
    },
    {
      key: 'initUnauth',
      routeName: 'Login'
    }
  ]
};

export const REDUCER_NAME = 'nav';

export const navReducer = (state = initialNavState, action) => {
  if (action.type === 'Login') {
    return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
  }
  if (action.type === 'Logout') {
    return AppNavigator.router.getStateForAction(NavigationActions.navigate({
      routeName: 'Login'
    }), state);
  }
  return AppNavigator.router.getStateForAction(action, state);
}
