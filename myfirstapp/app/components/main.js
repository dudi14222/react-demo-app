import React, { Component } from 'react';
import { 
    View,    
    Text  
} from 'react-native'

class Main extends Component {
    render() {
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}
export default Main;
