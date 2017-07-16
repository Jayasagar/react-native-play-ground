import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import {loadUser} from './actions';

class ProfileScreen extends React.Component {

    componentDidMount() {
        // Make server call to get user profile data
        this.props.loadUser('redux-observable');
    }

    render() {
        return (
            <View>
                <Text> This profile page </Text>
                <Text> {this.props.profile.data.name} </Text>
            </View>
        );
    }
}

ProfileScreen.navigationOptions = {
    title: 'Profile'
};

const mapStateToProps = (state) => ({
    profile: state.profileReducer
});

const mapStateToDispatcher = (dispatch) => ({
    loadUser: (userName) => dispatch(loadUser(userName))
});

export default connect(mapStateToProps, mapStateToDispatcher)(ProfileScreen);