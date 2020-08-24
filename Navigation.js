import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Grocery from './Grocery';
import Flipkart1 from './Flipkart1';
import Flipkart2 from './Flipkart2';
import KeepDemo from './KeepDemo';
import ToDo from './ToDo';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}} >
        <TouchableOpacity style={{flex: 1, width: '60%', backgroundColor: 'black', margin: 6}} 
          onPress={() => this.props.navigation.navigate('Flipkart1')} 
        >
          <Text style={{fontSize: 35, color: 'white'}}> Flipkart1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, width: '60%', backgroundColor: 'black', margin: 6}} 
          onPress={() => this.props.navigation.navigate('Flipkart2', {} )} 
        >
          <Text style={{fontSize: 35, color: 'white'}}> Flipkart2 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, width: '60%', backgroundColor: 'black', margin: 6}} 
          onPress={() => this.props.navigation.navigate('Grocery')} 
        >
          <Text style={{fontSize: 35, color: 'white'}}> Grocery </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, width: '60%', backgroundColor: 'black', margin: 6}} 
          onPress={() => this.props.navigation.navigate('KeepDemo')} 
        >
          <Text style={{fontSize: 35, color: 'white'}}> KeepDemo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, width: '60%', backgroundColor: 'black', margin: 6}} 
          onPress={() => this.props.navigation.navigate('ToDo')} 
        >
          <Text style={{fontSize: 35, color: 'white'}}> ToDo </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const ReactComp = createStackNavigator(
{
  Home: HomeScreen,
  Flipkart1: Flipkart1,
  Flipkart2: Flipkart2,
  KeepDemo: KeepDemo,
  ToDo: ToDo,
  Grocery: Grocery,
},
{
  initialRouteName: 'Home',
}
);

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return(
      <ReactComp />
    );
  }
}