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
  StackNavigator,
  // createTabNavigator,
  TabNavigator,
  // createSwitchNavigator,
  //StackActions,
  NavigationActions,
} from 'react-navigation';
import ProfileIcon from 'react-native-vector-icons/MaterialIcons';
import FMIcon from 'react-native-vector-icons/Ionicons';
import FavoriteIcon from 'react-native-vector-icons/MaterialIcons';
import DiscoverIcon from 'react-native-vector-icons/Entypo';
import Settings from 'react-native-vector-icons/Ionicons';
import Menu from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/Entypo';

const w = Dimensions.get('window').width;


class LoginPage extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      name: '',
      pswd: '',
    };
  }

  /*resetAction() {
    // this.props.navigation.navigate('TabStack', {name: this.state.name})
    return(this.props.navigation.dispatch(NavigationActions.reset(
    {
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'TabStack', params: {
        name: this.state.name, 
        comment: Math.floor(Math.random() *100), 
        following: Math.floor(Math.random() *100), 
        followers: Math.floor(Math.random() *100),
      }})],
    })))
  }*/
  /*login() {
    this.props.navigation.navigate('TabStack',
      { name: this.state.name, 
        comment: Math.floor(Math.random() *100), 
        following: Math.floor(Math.random() *100), 
        followers: Math.floor(Math.random() *100),
      }
    )
  }*/

  render() {
    return(
      <View style={{margin: 10, borderColor: 'black', borderWidth: 2, height: 200, justifyContent: 'space-around', backgroundColor: 'white'}} >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
          <Text style={{color: 'black', fontSize: 25,}}>Name : </Text>
          <TextInput style={{flex: 1, fontSize: 25, }} onChangeText={(text) => this.setState({ name: text})} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
          <Text style={{color: 'black', fontSize: 25,}}>PassWord : </Text>
          <TextInput style={{flex: 1, fontSize: 25}} onChangeText={(text) => this.setState({ pswd: text})}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={{flex: 1, margin: 10, width: '35%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}} 
          onPress={() => this.props.navigation.navigate('TabStack')}
        >
          <Text style={{color: 'white', fontSize: 25}}> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class FMScreen extends Component {
  render() {
    return(
      <FMStack />
    );
  }
}

class Favorite extends Component {
  render() {
    return(
      <FAVStack />
    );
  }
}

class Discover extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> Discover screen </Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {    
    const name = this.props.navigation.getParam('name', 'NONAME');
    const comment = this.props.navigation.getParam('comment');
    const followers = this.props.navigation.getParam('followers');
    const following = this.props.navigation.getParam('following');

    return(
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={{flex: 0.5}} />
        <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}} >
          <View style={{height: 80, width: 80, borderRadius: 80, borderColor: 'white', borderWidth: 2}} />
          <Text style={{fontSize: 25, color: 'white'}}>{name}</Text>
        </View>
        <View style={{flex: 1, justifyContent:'space-around', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: w/10, color: 'white'}}>{comment}</Text>
            <Text style={{fontSize: 20, color: 'white', marginTop: 3}}> Comments </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: w/10, color: 'white'}}>{following}</Text>
            <Text style={{fontSize: 20, color: 'white', marginTop: 3}}> Following </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: w/10, color: 'white'}}>{followers}</Text>
            <Text style={{fontSize: 20, color: 'white', marginTop: 3}}> Followers </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Settings name="md-settings" size={40} color="white" />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Menu name="list" size={40} color="white" />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Logout name="log-out" size={40} color="white" />
        </View>
        <View style={{flex: 0.5}} />
      </View>
    );
  }
}

class S1SCR1 extends Component {
  /*static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    animationEnabled: true
  });*/
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FMStack Screen1 </Text>
        <Button title="Go To Screen2" onPress={() => this.props.navigation.navigate('s1scr2')} />
      </View>
    );
  }
}

class S1SCR2 extends Component {

  /*static navigationOptions = ({ navigation }) => ({
    tabBarVisible: navigation.state.params && navigation.state.params.tabBarVisibleStr === 'hide' ? false : true,
  });*/

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FMStack Screen2 </Text>
        {/*<Button title="Hide Tabs" onPress={() => this.props.navigation.setParams({ tabBarVisibleStr : 'hide' })} />*/}
        <Button title="Go To Screen3" onPress={() => this.props.navigation.navigate('s1scr3')} />
      </View>
    );
  }
}

/*S1SCR2.navigationOptions = ({navigation}) => ({
  let navigationOptions = {};
  if(navigation.state.routeName === 's1scr2') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
});
*/
class S1SCR3 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FMStack Screen3 </Text>
        <Button title="Go to Screen1" onPress={() => this.props.navigation.navigate('s1scr1')} />
      </View>
    );
  }
}

class S2SCR1 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FAVStack Screen1 </Text>
        <Button title="Go To Screen2" onPress={() => this.props.navigation.navigate('s2scr2')} />
      </View>
    );
  }
}

class S2SCR2 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FAVStack Screen2 </Text>
        <Button title="Go To Screen3" onPress={() => this.props.navigation.navigate('s2scr3')} />
      </View>
    );
  }
}

class S2SCR3 extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FAVStack Screen3 </Text>
        <Button title="Go to Screen1" onPress={() => this.props.navigation.navigate('s2scr1')} />
      </View>
    );
  }
}

const FMStack = new StackNavigator(
{
  s1scr1: {
    screen: S1SCR1,
    navigationOptions: {
      title: 'FMStack',
    }
  },
  s1scr2: {
    screen: S1SCR2,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  s1scr3: {
    screen: S1SCR3,
  }
},
{
  initialRouteName: 's1scr1',
   navigationOptions: {
      tabBarVisible: true,
    }
}
);

const FAVStack = new StackNavigator(
{
  s2scr1: {
    screen: S2SCR1,
    navigationOptions: {
      title: 'FAVStack',
    }
  },
  s2scr2: S2SCR2,
  s2scr3: S2SCR3,
},
{
  initialRouteName: 's2scr1',
}
);

const TabStack = new TabNavigator(
{
  fm: {
    screen: FMScreen,
  },
  fav: {
    screen: Favorite,
  },
  discover: {
    screen: Discover,
  },
  profile: {
    screen: Profile,
    index: 0,
  },
},
{
  initialRouteName: 'fm',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    showLabel: false,
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor, focused }) => {
      let fm,fav,discover,profile;
      if(navigation.state.routeName === 'fm') {
        fm = `ios-headset${focused ? '' : '-outline'}` ;
      }
      else if (navigation.state.routeName === 'fav') {
        fav = `favorite${focused ? '' : '-border'}` ;
      }
      else if (navigation.state.routeName === 'discover') {
        discover = 'folder-music';
      }
      else if (navigation.state.routeName === 'profile') {
        profile = 'account-circle';
      }
      return (
        <View style={{flexDirection: 'row'}}>
          <FMIcon name={fm} size={30} color={tintColor} />
          <FavoriteIcon name={fav} size={30} color={tintColor} />
          <DiscoverIcon name={discover} size={30} color={tintColor} />
          <ProfileIcon name={profile} size={30} color={tintColor} />
        </View>
      );
    }
  })
}
);

const RootStack = new StackNavigator(
{
  login: {
    screen: LoginPage,
    index: 0,
  },
  TabStack: {
    screen: TabStack,
    index: 1,
    navigationOptions: {
      header: null,
    }
  },
},
{
  navigationOptions: {
    headerTitle: 'LoginPage',
  },
}
);

export default class App extends Component {
  render() {
    return <RootStack />
  }
}