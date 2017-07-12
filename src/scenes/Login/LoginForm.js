import React from "react";
import loginStyle from "./styles";
import {Text, TextInput, View, Button} from "react-native";
import {connect} from "react-redux";

class LoginForm extends React.Component {
    render() {
        return (
            <View style={loginStyle.container}>
                <Text>
                    User Name
                </Text>
                <TextInput/>
                <Text> Password </Text>
                <TextInput/>
                <Button title="Login" />
            </View>
        );
    };
}

const mapStateToProps = (state) => ({
   userName:"Todo"
});
export default connect(mapStateToProps)(LoginForm);