import {createStore} from "redux";
import homeReducer from "./scenes/Home/homeReducer"

const initialStore = {
    message: "Welcome to React Todo app!"
};

const store = createStore(homeReducer, initialStore);

export default store;