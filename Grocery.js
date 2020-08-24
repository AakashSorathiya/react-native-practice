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
  Modal,
} from 'react-native';
import Add from 'react-native-vector-icons/MaterialIcons';

export default class Grocery extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      modalVisible: false,
      itemsGroc: [],
      itemName: '',
      description: '',
      price: '',
    };
  }

  static navigationOptions = {
    title: 'Grocery',
  };

  openModal() {
    this.setState({ modalVisible: true }); 
  }

  addItem() {
    if(this.state.itemName=='' || this.state.description=='' || this.state.price=='') {
      alert('Please Enter valid details!');
    }
    else {
      const allItems = this.state.itemsGroc;
      const tempObj = {
        itemName: this.state.itemName,
        description: this.state.description,
        price: this.state.price,
        isFiltered: true,
      };
      allItems.push(tempObj);
      this.setState({ itemsGroc: allItems, modalVisible: false });
    }
  }

  clear() {
    this.setState({ itemName: '', description: '', price: ''});
  }

  checkItemFilter(item) {
    if(this.state.itemName=='' && this.state.description=='' && this.state.price=='') {
      return true;
    }
    else{
      if(this.state.description==item.description && this.state.price==item.price) {
        return true;
      }
      else if(this.state.itemName==item.itemName || this.state.description==item.description || this.state.price==item.price ) {
        return true;
      }
    }
    
    return false;
  }

  render() {
    return(
      <View style={{flex: 1}} >
        <View style={styles.title} >
          <Text style={styles.titleText} >Grocery Store</Text>
          <TouchableOpacity style={{paddingRight: 10}} onPress={() => this.openModal()} >
            <Add name="add-circle-outline" size={35}  />
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <View style={styles.searchContainer} >
            <View style={styles.inputBox} >
              <Text style={styles.itemText} >Item Name : </Text>
              <TextInput style={styles.input} 
                underlineColorAndroid="transparent" 
                placeholder="Item Name" 
                onChangeText={(text) => this.setState({ itemName: text })} 
              />
            </View>
            <View style={styles.inputBox} >
              <Text style={styles.itemText} >Description : </Text>
              <TextInput style={styles.input} 
                underlineColorAndroid="transparent" 
                placeholder="Description" 
                onChangeText={(text) => this.setState({ description: text })} 
              />
            </View>
            <View style={styles.inputBox} >
              <Text style={styles.itemText} >Price : </Text>
              <TextInput style={styles.input} 
                underlineColorAndroid="transparent" 
                placeholder="Price" 
                onChangeText={(text) => this.setState({ price: text })} 
              />
            </View>
            <View style={styles.buttonBox} >
              <TouchableOpacity style={styles.button} >
                <Text style={styles.itemText} >SEARCH</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}} >
            <ScrollView>
              {
                this.state.itemsGroc.filter((item) => this.checkItemFilter(item)).map((itemObj) => {
                  return (
                    <View style={styles.itemBox} >
                      <View style={{width: '35%',}} />
                      <View style={styles.detailBox} >
                        <Text style={{fontSize: 25, color: 'black'}} > {itemObj.itemName} </Text>
                        <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.3)'}} > {itemObj.description} </Text>
                        <Text style={{fontSize: 25, color: 'black'}} > {itemObj.price} </Text>
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
    
        <Modal 
          animationType="slide" 
          transparent={false} 
          visible={this.state.modalVisible} 
          onRequestClose={() => this.setState({ modalVisible: false })} 
        >
          <View style={styles.searchContainer} >
              <View style={styles.inputBox} >
                <Text style={styles.itemText} >Item Name : </Text>
                <TextInput style={styles.input}
                  underlineColorAndroid="transparent" 
                  placeholder="Item Name" 
                  onChangeText={(text) => this.setState({ itemName: text })} 
                  value={this.state.itemName} 
                />
              </View>
              <View style={styles.inputBox} >
                <Text style={styles.itemText} >Description : </Text>
                <TextInput style={styles.input}
                  underlineColorAndroid="transparent"  
                  placeholder="Description" 
                  onChangeText={(text) => this.setState({description: text})} 
                  value={this.state.description} 
                />
              </View>
              <View style={styles.inputBox} >
                <Text style={styles.itemText} >Price : </Text>
                <TextInput style={styles.input}
                  underlineColorAndroid="transparent"  
                  placeholder="Price" 
                  onChangeText={(text) => this.setState({ price: text })} 
                  value={this.state.price} 
                />
              </View>
              <View style={styles.buttonBox2} >
                <TouchableOpacity style={styles.button2} onPress={() => this.clear()} >
                  <Text style={{fontSize: 25, color: 'black'}} >CLEAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => this.addItem()} >
                  <Text style={{fontSize: 25, color: 'black'}} >ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 60, 
    backgroundColor: 'rgba(60,200,39,1)', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 30, 
    color: 'white', 
    flex: 1, 
    textAlign: 'center',
  },
  container: {
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  searchContainer: {
    borderWidth: 1, 
    borderColor: 'black', 
    backgroundColor: 'white', 
    margin: 10, 
    height: 200, 
    justifyContent: 'space-around',
  },
  inputBox: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginLeft: 5,
  },
  itemText: {
    fontSize: 25, 
    color: 'black',
  },
  input: {
    height: 55, 
    fontSize: 25, 
    flex: 1
  },
  buttonBox: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent:'flex-end',
  },
  button: {
    height: '90%', 
    width: 120, 
    backgroundColor: 'rgba(60,200,39,1)', 
    alignItems:'center', 
    justifyContent: 'center', 
    marginRight: 5,
  },
  itemBox: {
    margin: 10, 
    height: 150, 
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: 'black', 
    flexDirection: 'row',
  },
  detailBox: {
    flex: 1, 
    marginLeft: 5, 
    alignItems: 'flex-start', 
    justifyContent: 'space-around',
  },
  buttonBox2: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent:'space-around',
  },
  button2: {
    height: '80%', 
    width: 120, 
    backgroundColor: 'rgba(60,200,39,1)', 
    alignItems:'center', 
    justifyContent: 'center', 
    marginRight: 5,
  },
})