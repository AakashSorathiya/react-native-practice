import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';

Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App1 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 10, backgroundColor: 'black'}} />
        <View style={{flex: 9, backgroundColor: 'white'}} />
        <View style={{flex: 8, backgroundColor: 'black'}} />
        <View style={{flex: 7, backgroundColor: 'white'}} />
        <View style={{flex: 6, backgroundColor: 'black'}} />
        <View style={{flex: 5, backgroundColor: 'white'}} />
        <View style={{flex: 4, backgroundColor: 'black'}} />
        <View style={{flex: 3, backgroundColor: 'white'}} />
        <View style={{flex: 2, backgroundColor: 'black'}} />
        <View style={{flex: 1, backgroundColor: 'white'}} />
      </View> 
      );
  }
}