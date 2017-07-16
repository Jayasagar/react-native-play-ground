import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';

import { AppNavigator } from './navigators/AppNavigator';

import profileReducer from './scenes/Profile/profileReducer';

const homeAction = AppNavigator.router.getActionForPathAndParams('Home');
const homeNavState = AppNavigator.router.getStateForAction(homeAction);

const loginAction = AppNavigator.router.getActionForPathAndParams('Login');
const loginNavState = AppNavigator.router.getStateForAction(loginAction, homeNavState);

//const profileAction = AppNavigator.router.getActionForPathAndParams('Profile');
//const profileNavState = AppNavigator.router.getStateForAction(profileAction, loginNavState);

const navReducer = (state = loginNavState, action) => {
    let nextState;

    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
        break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routerName: 'Login'}), state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

const initialAuthState = {isLoggedIn : false};

// TODO: Immutable State?
const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn:true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

const AppReducers = combineReducers(
    {
       navReducer,
       authReducer,
       profileReducer
    });

export default AppReducers;