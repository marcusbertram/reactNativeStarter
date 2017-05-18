import React, { PropTypes } from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  Button
} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
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
  }
}

LoginScreen.navigationOptions = {
  title: 'Log In',
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};


export default LoginScreen;
