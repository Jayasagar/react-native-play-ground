import React from "react";
import {connect} from "react-redux";
import {Button, Text, View} from "react-native";
import {NavigationActions} from "react-navigation";

class LoginStatus extends React.Component {
    render() {
        if(!this.props.isLoggedIn) {
            return <Text> Not tet loggedIn </Text>;
        }

        return (
            <View>
                <Text> Welcome. You have logged in already! </Text>
                <Button title="Profile" onPress={() => this.props.dispatch(NavigationActions.navigate({routeName: 'Profile'}))} />
            </View>
        );
    }
}

const mapFromStateToProps = (state) => ({
    isLoggedIn : state.authReducer.isLoggedIn
});

export default connect(mapFromStateToProps)(LoginStatus);