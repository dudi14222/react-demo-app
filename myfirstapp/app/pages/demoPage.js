
import React, { Component } from 'react';
import {    
    StyleSheet,
    Text,
    View,   
    ImageBackground
} from 'react-native';

import Layout from '../components/layout'

export default class DemoPage extends Component<{}> {
    
    static navigationOptions = {
        header: null
    }
    render() {        
        return (
            <Layout>
                <Text style={{backgroundColor: 'blue', margin: 5}}>
                    Main
                </Text>
                 <Text style={{backgroundColor: 'blue', margin: 5}}>
                    Main
                </Text>
                 <Text style={{backgroundColor: 'blue', margin: 5}}>
                    Main
                </Text>
            </Layout>
        );
    }
}


