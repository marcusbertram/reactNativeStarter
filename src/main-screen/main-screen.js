import React from 'react';
import { styles} from './styles';
import { View } from 'react-native';
import { LoginStatusMessage } from './login-status-message';
import { AuthButton } from './auth-button';

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);
MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
