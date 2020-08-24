import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Back from 'react-native-vector-icons/MaterialIcons';
import Chat from 'react-native-vector-icons/MaterialIcons';
import Settings from 'react-native-vector-icons/Feather';
import Prev from 'react-native-vector-icons/MaterialIcons';
import Next from 'react-native-vector-icons/MaterialIcons';
import ChatBox from 'react-native-vector-icons/Ionicons';

export default class MyApp4 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.titleContainer} >
          <Back name="navigate-before" size={50} color='black' style={{flex: 0.5}} />
          <Text style={styles.title}> Title </Text>
          <View style={{flex: 0.5}} />
        </View>
        <View style={styles.imgContainer} >
          <Image style={styles.image} source={require('./png/superman.jpg')} />  
        </View>
        <View style={styles.container} >
          <View style={styles.chatBox} >
            <ChatBox name="ios-chatboxes-outline" color="black" size={30} style={{marginLeft: 25}}/>
            <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}> 001 </Text>
          </View>
          <Text style={{fontSize: 20, color: 'black',}}> List </Text>
        </View>
        <View style={styles.bottom} >
          <View style={styles.nav} >
            <Prev name="navigate-before" color="black" size={30} />
            <Text style={{fontSize: 20, color: 'black'}}> Name </Text>
            <Next name="navigate-next" color="black" size={30} />
          </View>
          <Chat name="chat-bubble-outline" size={30} color='black' />
          <Settings name="settings" size={30} color="black"  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1, 
    alignItems: 'center', 
    flexDirection: 'row',
  },
  title: {
    flex: 1, 
    fontSize: 40, 
    textAlign: 'center', 
    color: 'black',
  },
  imgContainer: {
    flex: 7, 
    backgroundColor: 'rgba(0,0,0,0.1)', 
    borderTopWidth: 2, 
    borderStyle: 'solid', 
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '95%', 
    resizeMode: 'cover',
  },
  bottom: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginLeft: 10, 
    marginRight: 10
  },
  nav: {
    flex: 0.7, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  container: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginLeft: 10, 
    marginRight: 10,
  },
  chatBox: {
    width: '80%', 
    height: '80%', 
    borderRadius: 80, 
    borderColor: 'black', 
    borderWidth: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
  },
});