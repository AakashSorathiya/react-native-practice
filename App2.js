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

export default class App2 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, backgroundColor: 'black'}} >
          <View style={{flex: 1, backgroundColor: 'balck'}} />
          <View style={{flex: 1, backgroundColor: 'white'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'white'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}} >
          <View style={{flex: 1, backgroundColor: 'white'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'white'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'white'}} />
        </View>
      </View>
      );
  }
}