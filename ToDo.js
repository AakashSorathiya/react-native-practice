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

export default class ToDo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      itemName: '',
      checkBox: 'checkbox-blank-outline',
      selection: 'Select',
    };
  }

  static navigationOptions = {
    title: 'ToDo',
  }

  _addItem() {
    const Items = this.state.items;
    let name = this.state.itemName;
    if(this.state.itemName == '') {
      alert('Please Enter any Item');
    }
    else {
      const l = Items.push({itemsText: name});
      this.setState({ items: Items });
      Keyboard.dismiss();
    }
  }

  delete() {
    const newItemsArr = this.state.items.filter((item) => this.uncheckItems(item));
    this.setState({ items: newItemsArr });
    /*if(newItemsArr.length == 0) {
      this.setState({ selection: 'Select' });
    }*/
  }

  uncheckItems(item) {
    if(item.isChecked == true) {
      return false;
    }
    return true;
  }

  selection() {
    if(this.state.selection == 'Select') {
      this.setState({ selection: 'Deselect'});
      const allItems = this.state.items;
      allItems.forEach((item) => {
        item.isChecked = true;
      });
      this.setState({ items: allItems });
    }
    else {
      this.setState({ selection: 'Select'});
      const allItems = this.state.items;
      allItems.forEach((item) => {
        item.isChecked = false;
      });
      this.setState({ items: allItems });
    }
  }

  _check(item) {

    //let flag=0;
    const allItems = this.state.items;
    allItems[allItems.indexOf(item)].isChecked = !allItems[allItems.indexOf(item)].isChecked;
    this.setState({ items: allItems });

    /*allItems.forEach((item1) => {
      if(item1.isChecked == false) {
        flag = 1;
      }
    });

    if(flag == 1) {
      this.setState({ selection: 'Select' });
    }
    else {
      this.setState({ selection: 'Deselect'});
    }*/
  }

  render() {
    return(
      <View style={{flex: 1}} >
        <View style={styles.title} >
          <Text style={{fontSize: 35, color: 'black'}} >ToDo List</Text>
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
          <View style={styles.selectionContainer} >
            <TouchableOpacity style={styles.selection} onPress={() => this.selection()} >
              <Text style={styles.selectionText}>{ this.state.items.filter((item) => { return item.isChecked }).length==this.state.items.length && this.state.items.length>0 ? 'Deselect' : 'Select'}</Text>
              <Text style={styles.selectionText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => this.delete()} >
              <Text style={styles.deleteText}>Delete</Text>
              <Text style={styles.deleteText}>Selected</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex: 1, margin: 10}}>
            {
              this.state.items.map((item, index) => {
                return(
                  <View style={styles.itemContainer} >
                    <View style={styles.checkBox} > 
                      {
                        item.isChecked ? 
                          <Check name="checkbox-marked-outline" size={30} color="black" onPress={() => this._check(item)}/>
                        :
                          <Check name="checkbox-blank-outline" size={30} color="black" onPress={() => this._check(item)}/>
                      }
                    </View>
                    <View style={styles.nameContainer} >
                      <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'none', }} multiline={true} onPress={() => this._check(item)}>{item.itemsText}</Text>
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
  deleteContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',     
    borderBottomWidth: 1, 
    borderColor: 'rgba(0,0,0,0.2)',
  },
  delete: {
    height: 70,
    width: '40%',
    backgroundColor: 'rgba(255,187,0,1)',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  deleteText: {
    fontSize: 20,
    color: 'black',
  },
  selectionContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
    borderBottomWidth: 1, 
    borderColor: 'rgba(0,0,0,0.2)',
  },
  selection: {
    height: 70,
    width: '40%',
    backgroundColor: 'rgba(255,187,0,1)',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  selectionText: {
    fontSize: 20,
    color: 'black',
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