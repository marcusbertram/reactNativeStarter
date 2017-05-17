import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import {AppNavigator} from '../nav/index';

export const AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(({dispatch, nav}) => (<AppNavigator
  navigation={addNavigationHelpers({dispatch, state: nav})}
/>));
