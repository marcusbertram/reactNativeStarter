import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles} from './styles';

export const LoginStatusMessage = (isLoggedIn) => {
  console.warn(isLoggedIn);
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
};
