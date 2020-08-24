import React, {Component} from 'react';
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	Platform,			
} from 'react-native';

Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MyApp extends Component{
	constructor(props){
		super(props);
		this.state={text: ''};
	}
	render(){
		return(
			<View style={{backgroundColor: '{text}'}}>
			 <TextInput placeholder="Type Here." onChangeText={(text) => this.setState({text}) } />
			 <Text style={{fontSize: 20, padding: 20}}>{this.state.text}</Text> 
			</View>
			);
	}
}
