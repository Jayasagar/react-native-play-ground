import React from "react";
import loginStyle from "./styles";
import {Button, Text, TextInput, View} from "react-native";

class LoginForm extends React.Component {
    render() {
        console.log("loginform props:" + this.props);

        return (
            <View style={loginStyle.container}>
                <Text>
                    User Name
                </Text>
                <TextInput />
                <Text> Password </Text>
                <TextInput />
                <Button title="Log in"
                    onPress={() => this.props.navigation.dispatch({type : 'Login'})}/>
            </View>
        );
    };
}

LoginForm.navigationOptions = {
    title : 'Log In'
};

export default LoginForm;
