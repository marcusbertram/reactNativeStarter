import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import {
  NavigationActions
} from 'react-navigation';

import { connect } from 'react-redux';

const LoginStatusMessage = connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Text>Please log in</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
    </View>
  );
});

const AuthButton = connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
}), dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  login: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
}))(({ logout, login, isLoggedIn }) => (
  <Button
    title={isLoggedIn ? 'Log Out' : 'Log In'}
    onPress={isLoggedIn ? logout : login}
  />
));

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);
MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MainScreen;
