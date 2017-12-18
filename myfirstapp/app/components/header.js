import React, { Component } from 'react';
import { 
    View,
    ImageBackground,
    Text  
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text style={{ color: 'white', marginTop: 8, fontSize: 18}}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Header;
