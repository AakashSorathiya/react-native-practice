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
  createStackNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';

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

  resetAction() {
  	// this.props.navigation.navigate('TabStack', {name: this.state.name})
  	return(this.props.navigation.dispatch(StackActions.reset(
  	{
  		index: 0,
  		actions: [NavigationActions.navigate({routeName: 'TabStack', params: {
  			name: this.state.name, 
        comment: Math.floor(Math.random() *100), 
        following: Math.floor(Math.random() *100), 
        followers: Math.floor(Math.random() *100),
  		}})],
  	})))
  }
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
          onPress={() => this.resetAction()}
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
      <View style={{flex: 1, backgroundColor: '#3e2465'}}>
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

	/*static navigationOptions = ({ navigation, navigationOptions }) => ({
    tabbar: {visible: !navigationOptions.tabBarVisible},
    animationEnabled: true
  });*/

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: w/10,}}> FMStack Screen2 </Text>
        <Button title="Hide Tabs" onPress={() => this.props.navigation.navigate('profile')} />
        <Button title="Go To Screen3" onPress={() => this.props.navigation.navigate('s1scr3')} />
      </View>
    );
  }
}

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

const FMStack = createStackNavigator(
{
  s1scr1: {
    screen: S1SCR1,
    navigationOptions: {
      title: 'FMStack',
    }
  },
  s1scr3: {
  	screen: S1SCR3,
  }
},
{
  initialRouteName: 's1scr1',
  /*navigationOptions: ({ navigation, navigationOptions }) => ({
    tabbar: {visible: false},
  })*/
},
);

const FAVStack = createStackNavigator(
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

/*class TabComp extends Component {
  render() {
    return (
      <TabStack navObj={this.props.navigation} />
    )
  }
}

class FMComp extends Component {
  render() {
    return (
      <FMScreen navObj={this.props.navigation.state.params.navObj} />
    )
  }
}*/

const TabStack = createMaterialBottomTabNavigator(
{
  fm: {
    screen: FMStack,
    //screen: ({ navigation, screenProps }) => <FMStack screenProps={{ ...screenProps }} />,
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
  initialRouteName: 'profile',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: 'black', height: 50, },
  shifting: true,
  labeled : false,

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

const RootStack = createStackNavigator(
{
  login: {
    screen: LoginPage,
    index: 0,
    navigationOptions: {
    headerTitle: 'LoginPage',
  },
  },
  TabStack: {
    screen: TabStack,
    //screen: ({ navigation, screenProps }) => <TabStack screenProps={{ ...screenProps, rootNavigation: navigation }} />,
    index: 1,
    navigationOptions: {
      header: null,
    }
  },
  s1scr2: {
    screen: S1SCR2,
    index: 2,
     navigationOptions: {
      tabBarVisible: false,
      title: 'OuterStack',
    }
  }
},
);

export default class App extends Component {
  render() {
    return <RootStack />
  }
}