import React, {Component} from 'react';
import { Scene, Actions, Router } from 'react-native-router-flux';
import TunePro1 from './TunePro1';
import TunePro2 from './TunePro2';

const TabView = () => {
  return(
    <Router>
      <Scene key="root">
        <Scene initial key="tab1" component={TunePro2} hideNavBar={true} />
        <Scene key="tab2" component={TunePro1} hideNavBar={true} />
      </Scene>
    </Router>
  );
}

export default class TunePro3 extends Component {
  render() {
    return(
      <TabView />
    );
  }
}