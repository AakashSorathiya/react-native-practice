import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default class MyApp2 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      songArr: [
        {
          songName: "Song 1",
          artistName: "Artist 1",
        },
        {
          songName: "Song 2",
          artistName: "Artist 2",
        },
        {
          songName: "Song 3",
          artistName: "Artist 3",
        },
        {
          songName: "Song 4",
          artistName: "Artist 4",
        },
        {
          songName: "Song 5",
          artistName: "Artist 5",
        },
        {
          songName: "Song 6",
          artistName: "Artist 6 AAAAADKDMMFNDNNDHDNDHDNDHDNDHNN",
        },
        {
          songName: "Song 7",
          artistName: "Artist 7",
        },
      ]
    };
  }

  _renderItem(item) {
    return (
      <View style={styles.listBox} >
        <Image source={require('./png/music3.png')} style={styles.img} />
        <View style={styles.textBox} >
          <Text style={styles.text} > {item.item.songName} </Text>
          <Text style={styles.text} > {item.item.artistName} </Text>
        </View>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.songArr}
          renderItem={this._renderItem}
        />
        {/*<ScrollView style={styles.scrollContainer}>
          <View style={styles.listBox} >
            <Image source={require('./png/music3.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
          <View style={styles.listBox} >
            <Image source={require('./png/music.png')} style={styles.img} />
            <View style={styles.textBox} >
              <Text style={styles.text} > sjdubyaegf </Text>
              <Text style={styles.text} > ndsfisg </Text>
            </View>
          </View>
        </ScrollView>*/}
        <View style={styles.header} />
        <View style={styles.footer} />
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
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 20,
    flexWrap: 'wrap'
  },
  footer: {
    height: 60, 
    backgroundColor: 'blue', 
    position: 'relative', 
    bottom: 0,
  },
  scrollContainer: {
    marginTop: 100,
    zIndex: 0,
    position: 'relative',
  }
});