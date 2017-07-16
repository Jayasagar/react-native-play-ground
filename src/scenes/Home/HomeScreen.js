import React from "react";
import {View} from "react-native";

import LoginStatus from "./components/LoginStatus";
import AuthButton from "./components/AuthButton";

const mapPropsFromState = (state) => ({
    message: state.message
});

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: "Welcome"
    };

    render() {
        return (
            <View>
                <LoginStatus/>
                <AuthButton/>
            </View>
        );
    }
}

export default HomeScreen;
