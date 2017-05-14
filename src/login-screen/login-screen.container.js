import React, { PropTypes } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to the React Native Starter Kit
    </Text>
    <Text style={styles.instructions}>
      Using Redux!
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);
LoginScreen.navigationOptions = {
  title: 'Log In',
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

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};


export default LoginScreen;
