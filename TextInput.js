import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Platform,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default class InputText extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text1: '',
      text2: '',
      buttonName: 'Enable',
      value: false,
    };
  }

  _copy() {
    this.setState({ text2: this.state.text1 });
  }

  _toggle() {
    if(this.state.buttonName == 'Enable') {
      this.setState({ buttonName: 'Disable'});
      this.setState({ value: true});
    }
    else {
      this.setState({ buttonName: 'Enable'});
      this.setState({ value: false});
    }
  }

  render() {
    return(
      <View style={{flex: 1}} >
        <TextInput 
          style={{height: 50}} 
          onChangeText={(text1) => this.setState({ text1 }) }
          value={this.state.text1}
          secureTextEntry={this.state.value}
        />
        <View style={{flex: 1}} >
          <Text style={{fontSize: 25}} >{this.state.text1} </Text>
          <View style={{flex: 0.2}} />
          <Button title="COPY" onPress={() => this._copy()} />
          <View style={{flex: 0.3}} />
          <Button title={this.state.buttonName} onPress={() => this._toggle()} />
        </View>
        <TextInput 
          style={{height: 50}} 
          onChangeText={(text2) => this.setState({ text2 }) }
          value={this.state.text2}
        />
        <View style={{flex: .5}} >
          <Text style={{fontSize: 25}} >{this.state.text2} </Text>
        </View>
      </View>
    );
  }
}