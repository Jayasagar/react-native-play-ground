import React from "react";
import {Provider} from "react-redux";

import AppWithNavigationState from "./navigators/AppNavigator";
import store from "./store";

const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);

export default Root;