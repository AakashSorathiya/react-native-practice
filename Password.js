import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Platform,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Password extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      iconName: 'visibility',
      value: false
    };
  }

   _toggle() {
    if(this.state.iconName == 'visibility') {
      this.setState({ iconName: 'visibility-off'});
      this.setState({ value: true});
    }
    else {
      this.setState({ iconName: 'visibility'});
      this.setState({ value: false});
    }
  }

  render() {
    return(
      <View style={{height: 60, borderWidth: 2, borderColor: 'black', margin: 6, flexDirection: 'row', borderRadius: 7}} >
        <View style={{flex: 1}} >
          <TextInput underlineColorAndroid="transparent" style={[{flex: 1}]} secureTextEntry={this.state.value} />
        </View>
        <TouchableOpacity style={{flex: 0.25, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}} onPress={() => this._toggle()} >
          <Icon name={this.state.iconName} size={40} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}