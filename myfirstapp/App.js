/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  Switch,
  StyleSheet
} from 'react-native';



import Component3 from './app/components/component3/component3'
import Users from './app/components/users/users'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello',
      name: 'Dudi',
      switchValue: false
    }
  }
  onChangeText(value) {
    this.setState({ textValue: value });
  }
  onValueChange(value) {
    this.setState({
      switchValue: value
    })
  }
  render() {
    console.log('Hellow');
    return (
      <View style={styles.container}>
        {/* <Component3 text='Demo' />
       <TextInput placeholder='Enter Text' 
          value={this.state.textValue}
          onChangeText={(value)=> this.onChangeText(value)}
       /> 
       <Text>{this.state.textValue}</Text>  
       <Switch 
          value={this.state.switchValue}
          onValueChange={(value)=> this.onValueChange(value)}
       />  */}



         <Users /> 

        {/* <View style={[styles.boxContainer, styles.boxA]}>
          <Text>Demo</Text>
        </View>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Text>Demo</Text>
          <Text>Demo</Text>
          <Text>Demo</Text>
        </View>

        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Text>Demo</Text>
        </View>

        <View style={[styles.boxContainer, styles.boxThree]}>
          <Text>Demo</Text>
        </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 2,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  boxOne: {
    backgroundColor: 'red'
  },
  boxTwo: {
    backgroundColor: 'blue'
  },
  boxThree: {
    backgroundColor: 'green'
  },
  boxA: {
    flex: 1
  },
});

