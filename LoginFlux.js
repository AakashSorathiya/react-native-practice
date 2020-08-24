import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import {
  Actions, 
  Router, 
  Stack, 
  Scene,
  Tab,
  TabIcon,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const w = Dimensions.get('window').width;

class SCR1 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> Screen1 </Text>
        <Button title="Go To Screen2" onPress={() => Actions.scr2()} />
      </View>
    );
  }
}

class SCR2 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> Screen2 </Text>
        <Button title="Go To Screen3" onPress={() => Actions.scr3()} />
      </View>
    );
  }
}

class SCR3 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> Screen3 </Text>
        <Button title="Go to Screen1" onPress={() => Actions.scr1()} />
      </View>
    );
  }
}

class TabView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selected: false,
    };
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Router>
            <Scene key="root">
              <Scene key="scr1" component={SCR1} title="Screen1" />
              <Scene key="scr2" component={SCR2} title="Screen2" />
              <Scene key="scr3" component={SCR3} title="Screen3" />
            </Scene>
          </Router>
        </View>
        <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="list" color="black" size={25} onPress={() => Actions.scr1({ type: 'reset' })} />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="list" size={25} color="black" onPress={() => Actions.scr2({ type: 'reset' })} />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="list" size={25} color="black" onPress={() => Actions.scr3({ type: 'reset' })} />
          </View>
        </View>
      </View>
    );
  }
}

const MyStack = () => {
  return(
    <Router>
      <Scene key="root">
        <Scene key="tab" component={TabView} title="TabView" >
          <Scene key="scr1" component={SCR1} title="Screen1" />
          <Scene key="scr2" component={SCR2} title="Screen2" />
          <Scene key="scr3" component={SCR3} title="Screen3" />
        </Scene>
      </Scene>
    </Router>
  );
}

export default class App extends Component {
  render() {
    return(
      <TabView />
    );
  }
}