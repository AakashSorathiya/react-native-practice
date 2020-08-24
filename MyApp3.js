import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Slider,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Play from 'react-native-vector-icons/MaterialIcons';
import Pause from 'react-native-vector-icons/MaterialIcons';
import Next from 'react-native-vector-icons/MaterialCommunityIcons';
import Prev from 'react-native-vector-icons/MaterialCommunityIcons';
import Fav from 'react-native-vector-icons/MaterialIcons';
import Note from 'react-native-vector-icons/SimpleLineIcons';
import Rep from 'react-native-vector-icons/Ionicons';
import Drop from 'react-native-vector-icons/Ionicons';
import List from 'react-native-vector-icons/Ionicons';
import Opt from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MyApp3 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      SliderValue :  0,
      play : false
    };
  }

  _onPlay() {
    this.setState({ play : true });
    this.state.SliderValue += this.state.SliderValue;
  }
  _onPause() {
    this.setState({ play : false })
  }
  _onPrev() {
    Alert.alert('Previous')
  }
  _onNext() {
    Alert.alert('Next')
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./png/guitar.jpg')} style={styles.backImage} >
          <View style={styles.overlay} > 
            <View style={styles.top}>
              <Drop name="ios-arrow-dropdown-circle-outline" color="white" size={45} backgroundColor="blue"  />
              <Rep name="md-repeat" color="#fff" size={45} />
            </View>
            <View style={styles.imgContainer} >
              <Image style={styles.circle} source={require('./png/guitar.jpg')} />
            </View>
            <View style={styles.textContainer} >
              <List name="md-list" color="#fff" size={45} />
              <View>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}> Rocketeer </Text>
                <Text style={{color: 'white', textAlign: 'center'}} > Far East Movement </Text>
              </View>
              <Opt name="dots-horizontal" color="#fff" size={45} />
            </View>
            <View style={styles.func}>
              <Fav name="favorite-border" color="#fff" size={45} />
              <TouchableOpacity onPress={this._onPrev} > 
                <Prev name="skip-previous-circle-outline" color="#fff" size={65} />
              </TouchableOpacity>
              { 
              this.state.play ?
                <TouchableOpacity onPress={() => this._onPause()} underlayColor="white" >
                  <Pause name="pause-circle-outline" color="#fff" size={90} borderWidth={1} />
                </TouchableOpacity>
              :
                <TouchableOpacity onPress={() => this._onPlay()} underlayColor="white" >
                  <Play name="play-circle-outline" color="#fff" size={90} borderWidth={1} />
                </TouchableOpacity>
              }
              <TouchableOpacity onPress={this._onNext} >
                <Next name="skip-next-circle-outline" color="#fff" size={65} />
              </TouchableOpacity>
              <Note name="note" color="#fff" size={45} />
            </View>
            <View style={styles.slider}>              
              <Slider
              step = { 1 }
              minimumValue = { 0 }
              maximumValue = { 100 }
              minimumTrackTintColor = "grey"
              onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
              style = {{ width: '90%', height: null,  }} 
              />
            </View>            
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backImage: {
    flex: 1,
    width: null,
    height: null,
    zIndex: -1,
    position: 'relative',
    top: 0, left: 0,
  },
  overlay: {
    flex: 1, 
    backgroundColor: 'rgba(66, 171, 249, 0.9)',
    position: 'relative',
    top: 0, left: 0,
  },
  top: {
    flex: 2, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginLeft: 20, 
    marginRight: 20,
  },
  imgContainer: {
    flex: 8, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  circle: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderColor: 'white',
    borderWidth: 4,
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  func: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  slider :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    margin: 10,
  },
});