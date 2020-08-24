import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Platform,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import Add from 'react-native-vector-icons/MaterialIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';

export default class KeepDemo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      itemName: '',
      checkBox: 'checkbox-blank-outline',
      itemStyle: 'none',
    };
  }

  static navigationOptions = {
    title: 'KeepDemo',
  };

  _addItem() {
    const Items = this.state.items;
    let name = this.state.itemName;
    if(this.state.itemName == '') {
      alert('Please Enter any Item');
    }
    else {
      const l = Items.push({itemsText: name});
      this.setState({ items: Items });
    }
    Keyboard.dismiss();
  }

  uncheckItems(item) {
    if(item.isChecked == true) {
      return false;
    }
    return true;
  }

  checkedItems(item) {
    if(item.isChecked == true) {
      return true;
    }
    return false;
  }

  _check(item) {

    const allItems = this.state.items;
    allItems[allItems.indexOf(item)].isChecked = !allItems[allItems.indexOf(item)].isChecked;
    this.setState({ items: allItems });

    /*if(this.state.checkBox == 'checkbox-blank-outline') {
      this.setState({ checkBox: 'checkbox-marked-outline' });
      this.setState({ itemStyle: 'line-through' });
    }
    else{
      this.setState({ checkBox: 'checkbox-blank-outline' });
      this.setState({ itemStyle: 'none' })
    }*/
  }

  render() {
    return(
      <View style={{flex: 1}} >
        <View style={styles.title} >
          <Text style={{fontSize: 35, color: 'black'}} > KeepDemo </Text>
        </View>
        <View style={styles.container} >
          <View style={styles.addContainer} >
            <View style={styles.add} >
              <View style={{flex: 1}} >
                <TextInput 
                  underlineColorAndroid="transparent" 
                  style={[{flex: 1, fontSize: 20}]} 
                  secureTextEntry={this.state.value}
                  onChangeText={(text) => this.setState({ itemName: text })}
                />
              </View>
              <TouchableOpacity style={styles.addIcon} onPress={() => this._addItem()} >
                <Add name="add" size={40} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{flex: 1, margin: 10}}>
            {
              this.state.items.filter((item) => this.uncheckItems(item)).map((item, index) => {
                return(
                  <View style={styles.itemContainer} >
                    <View style={styles.checkBox} >
                      <Check name="checkbox-blank-outline" size={30} color="black" onPress={() => this._check(item)}/>
                    </View>
                    <View style={styles.nameContainer} >
                      <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'none', }} multiline={true} onPress={() => this._check(item)}>{item.itemsText}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
          <View style={{flex: 0.2, borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)'}} />
          <ScrollView style={{flex: 1, margin: 10}}>
            {
              this.state.items.filter((item) => this.checkedItems(item)).map((item, index) => {
                return(
                  <View style={styles.itemContainer} >
                    <View style={styles.checkBox} >
                      <Check name="checkbox-marked-outline" size={30} color="black" onPress={() => this._check(item)}/>
                    </View>
                    <View style={styles.nameContainer} >
                      <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'line-through', }} multiline={true} onPress={() => this._check(item)}>{item.itemsText}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 60, 
    backgroundColor: 'rgba(255,187,0,1)', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  container: {
    flex: 1, 
    backgroundColor: 'rgba(255,255,141,1)',
  },
  addContainer: {
    height: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomWidth: 1, 
    borderColor: 'rgba(0,0,0,0.2)',
  },
  add: {
    height: 60, 
    width: '85%', 
    borderWidth: 2, 
    borderColor: 'rgba(255,187,0,1)', 
    margin: 6, 
    flexDirection: 'row', 
    borderRadius: 7,
  },
  addIcon: {
    flex: 0.25, 
    backgroundColor: 'rgba(255,187,0,1)', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  itemContainer: {
    height: 60, 
    flexDirection: 'row',
  },
  checkBox: {
    flex: 0.2, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  name: {
    fontSize: 20, 
    color: 'black', 
    // textDecorationLine: line,
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 5, 
    justifyContent: 'center',
  },
})