import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';

var songArr = [
  {
    songName: '',
    artistName: '',
  }
];


export default class MyApp2 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      songArr: [
        {
          songName: 'a',
          artistName: 'b',
        },
      ]
    };
  }

  render(){
    return(
      <View style={{flex: 1}} >
        <View style={{flex: 0.3}}>
          <TextInput placeholder="Song Name" value={this.state.songArr.songName} /> 
          <TextInput placeholder="Artist Name" value={this.state.songArr.artistName} />
          <Button title="ADD" onPress={(songArr) => this.setState({ songArr: this.state.songArr.push(this.state.songArr) })} />
        </View>
        <View>
          <View>        
            <View>
              <Text style={styles.text} > {this.state.songArr.songName} </Text>
              <Text style={styles.text} > {this.state.songArr.artistName} </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative',
  },
  header: {
    height: 60,
    width: '100%', 
    backgroundColor: 'blue', 
    position: 'absolute', 
    top: 0,
    left: 0,
    zIndex: 10
  },
  listBox: {
    height: 100, 
    borderBottomWidth: 1, 
    borderColor: 'lightgrey', 
    alignItems: 'center', 
    flexDirection: 'row',
  },
  img: {
    marginLeft: 5, 
    marginRight: 5,
    height: 90,
    width: 90,
    resizeMode: 'contain'
  },
  textBox: {
    marginLeft: 5,
  },
  text: {
    fontSize: 20,
  },
  footer: {
    height: 60, 
    backgroundColor: 'blue', 
    position: 'relative', 
    bottom: 0,
  },
  scrollContainer: {
    paddingTop: 70,
    zIndex: 0,
    position: 'relative',
  }
});