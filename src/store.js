import {createStore, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import loadUserEpic from './scenes/Profile/epic';

import AppReducers from "./appReducer";

const store = createStore(AppReducers, applyMiddleware(createEpicMiddleware(combineEpics(loadUserEpic))));

export default store;