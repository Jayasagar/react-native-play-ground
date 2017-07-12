import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
//import HomeContainer from './scenes/Home/HomeContainer';
import LoginForm from './scenes/Login/LoginForm';

const Root = () => (
    <Provider store={store}>
        <LoginForm />
    </Provider>
);

export default Root;