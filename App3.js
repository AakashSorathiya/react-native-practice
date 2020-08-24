import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App3 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return(
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{width: 50, backgroundColor: 'white'}} />
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{flex: 1}} />
          <View style={{width: 50, backgroundColor: 'white'}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{width: 50, backgroundColor: 'white'}} />
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{flex: 1}} />
          <View style={{width: 50, backgroundColor: 'white'}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{width: 50, backgroundColor: 'white'}} />
          <View style={{flex: 1}} />
        </View>
      </KeyboardAvoidingView>
      );
  }
}