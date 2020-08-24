import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{this.props.navigation.getParam('name')}</Text>
        <Text>{this.props.navigation.getParam('id')}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="ScreenA"
          onPress={() => this.props.navigation.navigate('ScreenA')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back anywhere" />
      </View>
    );
  }
}

class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ScreenA</Text>
        <Button
          title="ScreenB"
          onPress={() => this.props.navigation.navigate('ScreenB')}
        />
        <Button
          title="Replace With ScreenC"
          onPress={() => this.props.navigation.replace('ScreenC')}
        />
        <Button
          title="Dispatch"
          onPress={() => this.props.navigation.dispatch(resetAction)}
        />
      </View>
    );
  }
}

class ScreenB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ScreenB</Text>
        <Button
          title="ScreenC"
          onPress={() => this.props.navigation.navigate('ScreenC')}
        />
        <Button title="Go to Home" onPress={() => this.props.navigation.goBack(this.props.navigation.navigate('Home'))} />
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back anywhere" />
      </View>
    );
  }
}

class ScreenC extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ScreenC</Text>
        <Button title="PopToTop" onPress={() => this.props.navigation.goBack(this.props.navigation.popToTop())} />
        <Button
          title="POP"
          onPress={() => this.props.navigation.pop()}
        />
        <Button
          title="POP2"
          onPress={() => this.props.navigation.pop(2)}
        />
        <Button
          title="Replace"
          onPress={() => this.props.navigation.replace(1)}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      key: 0,
    },
    Details: {
      screen: DetailsScreen,
    },
    ScreenA: {
      screen: ScreenA,
    },
    ScreenB: {
      screen: ScreenB,
    },
    ScreenC: {
      screen: ScreenC,
    },
  },
  {
    initialRouteName: 'Home',
    initialRouteKey: 0,
    initialRouteParams: {
      name: 'Aakash',
      id: 1,
    }
    navigationOptions: {
      
    }
  }
);

const resetAction = StackActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'ScreenC' }),
    NavigationActions.navigate({ routeName: 'ScreenB' }),
  ],
});

/*const didBlurSubscription = this.props.navigation.addListener(
  'didBlur',
  payload => {
    console.debug('didBlur', payload);
  }
);

// Remove the listener when you are done
didBlurSubscription.remove();*/

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}