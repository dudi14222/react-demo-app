
import React, { Component } from 'react';
import {
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

class ProductCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <ImageBackground source={this.props.source} style={this.props.style} >
                    {this.props.children}
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}
export default ProductCard;
