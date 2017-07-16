import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import React from 'react';

import HomeScreen from '../scenes/Home/HomeScreen';
import LoginForm from '../scenes/Login/LoginForm';
import ProfileScreen from '../scenes/Profile/ProfileScreen';

export const AppNavigator = StackNavigator({
    Login : {screen: LoginForm},
    Home : {screen : HomeScreen},
    Profile : { screen : ProfileScreen }
});

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
);

const mapStateToProps = (state) => ({
   nav : state.navReducer
});

export default connect(mapStateToProps)(AppWithNavigationState);
