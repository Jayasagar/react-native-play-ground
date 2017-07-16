import {createStore} from "redux";
import AppReducers from "./navReducer";

const store = createStore(AppReducers);

export default store;