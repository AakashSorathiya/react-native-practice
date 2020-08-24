import React, {Component} from 'react';
import {
	Text,
	StyleSheet,
	View,
  Image,
	Platform,
} from 'react-native';

Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class MyApp1 extends Component {
	constructor(props){
		super(props);
		this.state={date: new Date()};
	}
  

	render(){
		return(
      <View style={{flex: 1}}>
        <View style={styles.box1}> 
          <View style={{flex: 1, justifyContent: 'center'}} >
            <Text style={{fontSize:30 }}> {this.state.date.toLocaleDateString()} </Text>
            <Text style={{paddingLeft: 5}}> 4 Games </Text>
          </View>
          <Image source={require('./png/logo.png')} />          
        </View>
        <View style={styles.box2} >
          <Text style={styles.text1}> Games </Text>
          <Text style={styles.text1}> Players </Text>
          <Text style={styles.text1}> Teams </Text>
          <Text style={styles.text1}> Roster </Text>
        </View>
        <View style={styles.box3} >
          <View style={{flex: 1}} >
            <Text style={styles.q}> Q1 4:32 </Text> 
          </View>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image style={styles.imgLeft} source={require('./png/csk.png')} />
              <Text style={styles.textLeft}> 90 </Text>
            </View>
            <View style={styles.rightContainer} >
              <Text style={styles.textRight}> 93 </Text>
              <Image style={styles.imgRight} source={require('./png/kxip.png')} />
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={styles.box4} >
          <View style={{flex: 1}} >
            <Text style={styles.q}> Q2 4:32 </Text> 
          </View>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image style={styles.imgLeft} source={require('./png/rcb.png')} />
              <Text style={styles.textLeft}> 100 </Text>
            </View>
            <View style={styles.rightContainer} >
              <Text style={styles.textRight}> 91 </Text>
              <Image style={styles.imgRight} source={require('./png/dd.png')} />
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={styles.box5} >
          <View style={{flex: 1}} >
            <Text style={styles.q}> Q3 4:32 </Text> 
          </View>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image style={styles.imgLeft} source={require('./png/srh.png')} />
              <Text style={styles.textLeft}> 90 </Text>
            </View>
            <View style={styles.rightContainer} >
              <Text style={styles.textRight}> 91 </Text>
              <Image style={styles.imgRight} source={require('./png/mi.png')} />
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={styles.box6} >
          <View style={{flex: 1}} >
            <Text style={styles.q}> Q4 4:32 </Text> 
          </View>
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image style={styles.imgLeft} source={require('./png/kkr.png')} />
              <Text style={styles.textLeft}> 90 </Text>
            </View>
            <View style={styles.rightContainer} >
              <Text style={styles.textRight}> 91 </Text>
              <Image style={styles.imgRight} source={require('./png/rr.png')} />
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
			);
	}
}

const styles = StyleSheet.create({
  text1: {
    flex: 1, 
    color: 'white',
    textAlign: 'center',    
  },
  box1: {
    flex: 4, 
    backgroundColor: '#519ae1',
    flexDirection: 'row',
  },
  box2: {
    flex: 1, 
    backgroundColor: '#3772ac', 
    flexDirection: 'row',

    alignItems: 'center',
  },
  box3: {
    flex: 4, 
    backgroundColor: '#fdc047', 
    margin: 5 
  },
  box4: {
    flex: 4, 
    backgroundColor: '#385641', 
    margin: 5 
  },
  box5: {
    flex: 4, 
    backgroundColor: '#424957', 
    margin: 5,
  }, 
  box6: {
    flex: 4, 
    backgroundColor: '#f26739', 
    margin: 5,
  },
  q: {
    color: 'white', 
    alignSelf: 'center', 
    paddingTop: 9
  },
  imgLeft: {
    flex: 2, 
    alignSelf: 'center', 
    marginLeft: 13 
  },
  imgRight: {
    flex: 2, 
    alignSelf: 'center', 
    marginRight: 13
  },
  textLeft: {
    flex: 1, 
    color: 'white', 
    fontSize: 30, 
    alignSelf: 'center', 
    textAlign: 'right',
  },
  textRight: {
    flex: 1, 
    color: 'white', 
    fontSize: 30, 
    alignSelf: 'center', 
    textAlign: 'left',
  },
  container: {
    flex: 2, 
    flexDirection: 'row', 
    marginTop: 20,
  },
  leftContainer: {
    flex: 1,
    borderRightWidth: 1, 
    borderRightColor: 'white',  
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1, 
    flexDirection: 'row',
  },
});