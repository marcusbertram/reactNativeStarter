import {NavigationActions, StackNavigator} from 'react-navigation';

import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: MainScreen
  }
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export const REDUCER_NAME = 'nav';

export const navReducer = (state = initialState, action) => {
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
