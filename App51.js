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

export default class App5 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return(
      <View style={{flex: 1, position: 'relative'}} >
        <View style={{flex: 1, backgroundColor: 'black', position: 'relative'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'white', position: 'relative', left: 185, top: 28}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'black', position: 'relative', left: 0, top: 0}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', position: 'relative'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'white', position: 'relative', right: 0, top: 0}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'black', position: 'relative', left: 185, top: 0}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black', position: 'relative', justifyContent: 'flex-end', alignItems: 'flex-end'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'white', position: 'relative', right: 0, bottom: 0}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white', position: 'relative'}} >
          <View style={{width: 50, height: 50, backgroundColor: 'black', position: 'relative', left: 0, bottom: 0}} />
        </View>
      </View>
      );
  }
}