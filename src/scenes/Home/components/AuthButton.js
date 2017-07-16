import React from "react";
import {Button} from "react-native";
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

const mapStateToProps = (state) => ({
    isLoggedIn : state.authReducer.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({type: 'Logout'}),
    login: () => dispatch(NavigationActions.navigate({routeName: 'Login'}))
});

const AuthButton = ({isLoggedIn, login, logout}) => (
    <Button title={isLoggedIn ? 'Log out' : 'Log In'}
            onPress={isLoggedIn ? logout : login}/>
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);