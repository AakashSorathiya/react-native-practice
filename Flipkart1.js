import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import List from 'react-native-vector-icons/MaterialCommunityIcons';
import Sort from 'react-native-vector-icons/MaterialCommunityIcons';
import Filter from 'react-native-vector-icons/MaterialCommunityIcons';
import Fav from 'react-native-vector-icons/MaterialIcons';
import Tag from 'react-native-vector-icons/FontAwesome';
import Star from 'react-native-vector-icons/FontAwesome';

export default class Flipkart1 extends Component {

  static navigationOptions = {
    title: 'Flipkart1',
  }
  
  constructor(props) {
    super(props);
  
    this.state = {
      itemsFromFlipkart: [
        {
          itemId: 0,
          itemName: "ADIDAS Men Sports shoes",
          price: "1989",
          imageUrl: "https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw7517e086/zoom/BB6166_07_standard.jpg",
          originalPrice: "2599",
          promotion: "30% Off",
          itemRating: "4.2",
          emiAvailable: true,
        },
        {
          itemId: 1,
          itemName: "ADIDAS Men Sports Sandals",
          price: "3000",
          imageUrl: "https://shop.r10s.jp/auc-rodeo/cabinet/adidas/ba9380-1.jpg",
          originalPrice: "3400",
          promotion: "10% Off",
          itemRating: "4.2",
          emiAvailable: true,
        },
        {
          itemId: 2,
          itemName: "Nike Men Sports shoes",
          price: "1989",
          imageUrl: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/zc4jetbzgvl2coiq0jdj/air-presto-essential-shoe-NwTz99ZA.jpg",
          originalPrice: "2599",
          promotion: "20% Off",
          itemRating: "4.2",
          emiAvailable: false,
        },
        {
          itemId: 3,
          itemName: "Nike Men Sports Sandals",
          price: "1989",
          imageUrl: "https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/4030133/2018/4/10/11523365838552-Womens-Nike-Tanjun-Sandal-9751523365838330-1_mini.jpg",
          originalPrice: "2599",
          promotion: "30% Off",
          itemRating: "4.2",
          emiAvailable: true,
        },
        {
          itemId: 4,
          itemName: "ADIDAS Men Sports shoes",
          price: "1989",
          imageUrl: "https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw7517e086/zoom/BB6166_07_standard.jpg",
          originalPrice: "2599",
          promotion: "30% Off",
          itemRating: "4.2",
          emiAvailable: true,
        },
      ]
    };
  }

  _detail() {
    Alert.alert('ADIDAS YKING M Running Shoes For Men')
  }

  render() {
    return(
      <View style={styles.container} >
        <View style={styles.header} />
        <View style={styles.menu} >
          <View style={styles.dropList} >
            <List name="format-list-bulleted" color="black" size={30} />
          </View>
          <View style={styles.sort} >
            <Sort name="sort" color="black" size={30} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Sort </Text>
          </View> 
          <View style={styles.filter} >
            <Filter name="filter-variant" color="black" size={30} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Filter </Text>
          </View> 
        </View>
        <ScrollView style={styles.scroll}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}} >
            {
              this.state.itemsFromFlipkart.map((item) => {
                return(
                  <View style={styles.item} >
                    <View style={styles.fav} >
                      <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
                    </View>
                    <View style={{flex: 2}} >
                      <Image style={styles.img} source={{uri: item.imageUrl}} />
                    </View>              
                    <View style={{flex: 1,  marginLeft: 10, marginRight: 10, }} >                
                      <Text style={styles.itemName} numberOfLines={1} onPress={() => this._detail()} > {item.itemName} </Text>                
                      <View style={styles.priceContainer} >
                        <Text style={styles.price} > Rs. {item.price} </Text>
                        <Text style={styles.tprice} > {item.originalPrice} </Text>
                        <Text style={styles.disc} > {item.promotion} </Text>
                      </View>
                      <View style={styles.review} >
                        <View style={styles.stars} >
                          <Text style={styles.rating} > {item.itemRating} </Text>
                          <Star name="star" size={20} color="white" />
                        </View>
                        <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)'}} > (216) </Text>
                      </View>
                      <View style={styles.tag} >
                        <Tag name="tag" size={20} color="green" />
                        <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
                      </View>
                    </View>
                  </View>
                )
              })
            }
            
            {/*<View style={styles.item} >
              <View style={styles.fav} >
                <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
              </View>
              <View style={{flex: 2}} >
                <Image style={styles.img} source={require('./png/shoe1.jpeg')} />
              </View>              
              <View style={{flex: 1,  marginLeft: 10, marginRight: 10 }} >                
                <Text style={styles.itemName} numberOfLines={1} > ADIDAS Men SPORTS Shoes </Text>                
                <View style={styles.priceContainer} >
                  <Text style={styles.price} > Rs. 1,959 </Text>
                  <Text style={styles.tprice} > 2,799 </Text>
                  <Text style={styles.disc} > 30% Off </Text>
                </View>
                <View style={styles.review} >
                  <View style={styles.stars} >
                    <Text style={styles.rating} > 4.1 </Text>
                    <Star name="star" size={19} color="white" />
                  </View>
                  <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)'}} > (216) </Text>
                </View>
                <View style={styles.tag} >
                  <Tag name="tag" size={20} color="green" />
                  <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
                </View>
              </View>
            </View>          
            <View style={styles.item} >
              <View style={styles.fav} >
                <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
              </View>
              <View style={{flex: 2}} >
                <Image style={styles.img} source={require('./png/shoe1.jpeg')} />
              </View>              
              <View style={{flex: 1,  marginLeft: 10, marginRight: 10 }} >                
                <Text style={styles.itemName} numberOfLines={1} > ADIDAS Men SPORTS Shoes </Text>                
                <View style={styles.priceContainer} >
                  <Text style={styles.price} > Rs. 1,959 </Text>
                  <Text style={styles.tprice} > 2,799 </Text>
                  <Text style={styles.disc} > 30% Off </Text>
                </View>
                <View style={styles.review} >
                  <View style={styles.stars} >
                    <Text style={styles.rating} > 4.1 </Text>
                    <Star name="star" size={20} color="white" />
                  </View>
                  <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)'}} > (216) </Text>
                </View>
                <View style={styles.tag} >
                  <Tag name="tag" size={20} color="green" />
                  <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
                </View>
              </View>
            </View>
            <View style={styles.item} >
              <View style={styles.fav} >
                <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
              </View>
              <View style={{flex: 2}} >
                <Image style={styles.img} source={require('./png/shoe1.jpeg')} />
              </View>              
              <View style={{flex: 1,  marginLeft: 10, marginRight: 10 }} >                
                <Text style={styles.itemName} numberOfLines={1} > ADIDAS Men SPORTS Shoes </Text>                
                <View style={styles.priceContainer} >
                  <Text style={styles.price} > Rs. 1,959 </Text>
                  <Text style={styles.tprice} > 2,799 </Text>
                  <Text style={styles.disc} > 30% Off </Text>
                </View>
                <View style={styles.review} >
                  <View style={styles.stars} >
                    <Text style={styles.rating} > 4.1 </Text>
                    <Star name="star" size={20} color="white" />
                  </View>
                  <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)'}} > (216) </Text>
                </View>
                <View style={styles.tag} >
                  <Tag name="tag" size={20} color="green" />
                  <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
                </View>
              </View>
            </View>
            <View style={styles.item} >
              <View style={styles.fav} >
                <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
              </View>
              <View style={{flex: 2}} >
                <Image style={styles.img} source={require('./png/shoe1.jpeg')} />
              </View>              
              <View style={{flex: 1,  marginLeft: 10, marginRight: 10 }} >                
                <Text style={styles.itemName} numberOfLines={1} > ADIDAS Men SPORTS Shoes </Text>                
                <View style={styles.priceContainer} >
                  <Text style={styles.price} > Rs. 1,959 </Text>
                  <Text style={styles.tprice} > 2,799 </Text>
                  <Text style={styles.disc} > 30% Off </Text>
                </View>
                <View style={styles.review} >
                  <View style={styles.stars} >
                    <Text style={styles.rating} > 4.1 </Text>
                    <Star name="star" size={20} color="white" />
                  </View>
                  <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)'}} > (216) </Text>
                </View>
                <View style={styles.tag} >
                  <Tag name="tag" size={20} color="green" />
                  <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
                </View>
              </View>
            </View>*/}
          </View>
        </ScrollView>
        <View style={styles.footer} />
      </View>
    );
  }
}

let h = Dimensions.get('window').height;
let w = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'blue',
    height: 60,
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  menu: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: 'rgba(0,0,0,0.3)',
    position: 'relative',
  },
  dropList: {
    flex: 0.3, 
    borderRightWidth: 2, 
    borderColor: 'rgba(0,0,0,0.3)', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  sort: {
    flex: 1, 
    borderRightWidth: 1, 
    borderColor: 'rgba(0,0,0,0.3)', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  filter: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  scroll: {
    position: 'relative', 
    zIndex: 0,
    flexWrap: 'wrap',
    flex: 1,    
  },
  item: {
    width: ((w/2)-1), 
    borderRightWidth: 1, 
    borderColor: 'rgba(0,0,0,0.3)',
    height: 400,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  fav: {
    height: 30, 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    marginRight: 5, 
    marginTop: 5
  },
  img: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain',
  },
  itemName: {
    flex: 1, 
    fontSize: 17, 
    flexWrap: 'nowrap', 
    color: 'black', 
    textAlignVertical: 'center'
  },
  priceContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  price: {
    fontSize: 17, 
    fontWeight: 'bold', 
    color: 'black',
  },
  tprice: {
    fontSize: 15, 
    color: 'rgba(0,0,0,0.5)', 
    textDecorationLine: 'line-through',
  },
  disc: {
    fontSize: 15, 
    color: 'rgba(0,0,0,0.5)'
  },
  review: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  stars: {
    height: '70%', 
    backgroundColor: 'green', 
    width: '30%', 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  rating: {
    fontSize: 15, 
    color: 'white', 
    marginLeft: 2, 
    paddingRight: 2,
  },
  tag: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'blue',
    height: 60,
    width: '100%',
    position: 'relative',
    bottom: 0,
    left: 0,
  },
});