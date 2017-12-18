/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class Component3 extends Component<{}> {
  static navigationOptions = {
    title: 'Demo',
    header: null, 
  }
  render() {
    console.log('Hellow 1');
    return (
      <View>
        
        <Button
          onPress={() => this.props.navigation.navigate('Users', { name: 'Lucy' })}
          title="Go to Users"
        />

        <Text>
          Demo
        </Text>
      </View>
    );
  }
}

