import React from 'react';
import { styles} from './styles';
import { View } from 'react-native';
import { LoginStatusMessage } from './login-status-message';
import { AuthButton } from './auth-button';

class MainScreen extends React.Component {
  render() {
    const {isLoggedIn} = this.props;
    console.warn(isLoggedIn);
    return (
      <View style={styles.container}>
        <LoginStatusMessage isLoggedIn={isLoggedIn} />
        <AuthButton />
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
