import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import { styles} from './styles';

export const LoginStatusMessage = connect(state => ({
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
