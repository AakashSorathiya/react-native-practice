import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App6 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return(
      <View style={{flex: 1}} >
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}} >
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}} >
            <View style={{height: 4, width: 30, backgroundColor: 'white', marginBottom: 4}} />
            <View style={{height: 4, width: 30, backgroundColor: 'white', marginBottom: 4}} />
            <View style={{height: 4, width: 30, backgroundColor: 'white'}} />
          </View>
          <View style={{flex: 9, flexDirection: 'row'}} >
            <View style={{borderLeftWidth: 1, borderColor: 'white'}} />
            <Text style={{flex: 1, color: 'white', fontSize: 20, alignSelf: 'center', paddingLeft: 85 }}> HEADER </Text>
          </View>
        </View>
        <View style={{flex: 9, justifyContent: 'space-around', alignItems: 'center'}} >
          <View style={{ width: 150, height: 150, borderRadius: 150, backgroundColor: 'black'}} />
          <View style={{width: 280, height: 70, backgroundColor: 'black', flexDirection: 'row'}} >
            <View style={{flex: 0.3, backgroundColor: 'grey'}} />
          </View>
          <View style={{width: 280, height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'flex-end'}} >
            <View style={{flex: 0.3, backgroundColor: 'grey',}} />
          </View>
        </View> 
      </View>
      );
  }
}