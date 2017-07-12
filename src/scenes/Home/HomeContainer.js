import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const mapPropsFromState = (state) => ({
    message: state.message
});

class HomeContainer extends React.Component {
    render () {
        console.log(this.props.message);
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}

export default connect(mapPropsFromState)(HomeContainer);