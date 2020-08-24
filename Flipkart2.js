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

export default class Flipkart2 extends Component {

  static navigationOptions = {
    title: 'Flipkart2',
  }

  constructor(props) {
    super(props);
  
    this.state = {
      itemFromFlipkart: [
      {
        itemId: 0,
        itemName: "Apple iPad (6th Gen) 32 GB 9.7 inch with Wi-Fi only",
        itemColor: "Space Grey",
        itemRating: "4.2",
        itemReviews: "512",
        price: "23,900",
        priceInt: 23900,
        originalPrice: "28,000",
        promotion: "14% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad1.png")
      },
      {
        itemId: 1,
        itemName: "Apple iPad (6th Gen) 32 GB 9.7 inch with Wi-Fi only",
        itemColor: "Gold",
        itemRating: "4.3",
        itemReviews: "500",
        price: "24,500",
        priceInt: 24500,
        originalPrice: "28,000",
        promotion: "12.5% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad2.png")
      },
      {
        itemId: 2,
        itemName: "Apple iPad (5th Gen) 16 GB 9 inch with Wi-Fi only",
        itemColor: "Space Grey",
        itemRating: "4.1",
        itemReviews: "300",
        price: "15,600",
        priceInt: 15600,
        originalPrice: "18,000",
        promotion: "13% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad1.png")
      },
      {
        itemId: 3,
        itemName: "Apple iPad (5th Gen) 16 GB 9 inch with Wi-Fi only",
        itemColor: "Gold",
        itemRating: "4.2",
        itemReviews: "412",
        price: "16,000",
        priceInt: 16000,
        originalPrice: "18,000",
        promotion: "11% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad2.png")
      },
      {
        itemId: 4,
        itemName: "Apple iPad (7th Gen) 32 GB 9.7 inch with Wi-Fi only",
        itemColor: "Space Grey",
        itemRating: "4.5",
        itemReviews: "636",
        price: "29,000",
        priceInt: 29000,
        originalPrice: "30,000",
        promotion: "3% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad1.png")
      },
      {
        itemId: 5,
        itemName: "Apple iPad (7th Gen) 32 GB 9.7 inch with Wi-Fi only",
        itemColor: "Gold",
        itemRating: "4.4",
        itemReviews: "600",
        price: "28,7000",
        priceInt: 28000,
        originalPrice: "30,000",
        promotion: "4% Off",
        emiAvailable: true,
        imageUrl: require("./png/ipad2.png")
      },
      ]
    };
    // this._sort = this._sort.bind(this);
  }


  sortItems() {
    const arrItemsAcs = this.state.itemFromFlipkart;
    arrItemsAcs.sort((a, b) => {
      return a.priceInt - b.priceInt;
    });

    const arrItemsDcs = this.state.itemFromFlipkart;
    arrItemsDcs.sort((a, b) => {
      return b.priceInt - a.priceInt;
    });

    this.setState({ itemFromFlipkart: arrItemsAcs });
  }

  filterItems() {
    const arrOfItems = this.state.itemFromFlipkart;
    const newArr = arrOfItems.filter((item) => {
      if(item.priceInt<20000) {
        return true;
      }
    });
    this.setState({ itemFromFlipkart: newArr });
  }

  _renderItem(item) {
    return(
      <View style={{flex: 1, flexWrap: 'wrap'}} >
        <View style={styles.item} >
          <View style={styles.imgContainer} >
            <Image style={styles.image} source={item.item.imageUrl} />
          </View>
          <View style={styles.description} >
            <View style={{flex: 0.7}} />
            <Text style={styles.itemName} numberOfLines={2}>{item.item.itemName}</Text>
            <Text style={styles.itemColor}> {item.item.itemColor} </Text>
            <View style={styles.review} >
              <View style={styles.stars} >
                <Text style={styles.rating} > {item.item.itemRating} </Text>
                <Star name="star" size={16} color="white" />
              </View>
              <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.5)', paddingLeft: 5}} > ({item.item.itemReviews}) </Text>
            </View>
            <View style={styles.priceContainer} >
              <Text style={styles.price} > Rs {item.item.price}  </Text>
              <Text style={styles.tprice} > {item.item.originalPrice}  </Text>
              <Text style={styles.disc} > {item.item.promotion} </Text>
            </View>
            <View style={styles.tag} >
              <Tag name="tag" size={20} color="green" />
              <Text style={{fontSize: 17, color: 'black'}}> No Cost EMI & more </Text>
            </View>
            <View style={{flex: 0.7}} />
          </View>
          <View style={styles.fav} >
            <Fav name="favorite" size={25} color="rgba(0,0,0,0.4)" />
          </View>
        </View>
      </View>
    )
  }

  render() {
    return(
      <View style={styles.container} >
        <View style={styles.header} />
        <View style={styles.menu} >
          <View style={styles.dropList} >
            <List name="format-list-bulleted" color="black" size={30} />
          </View>
          <TouchableOpacity onPress={() => this.sortItems()} style={styles.sort} >
            <Sort name="sort" color="black" size={30} />
            <Text style={{fontSize: 20, fontWeight: 'bold',}}> Sort </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.filterItems()} style={styles.filter} >
            <Filter name="filter-variant" color="black" size={30} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Filter </Text>
          </TouchableOpacity> 
        </View>
        <FlatList
          data={this.state.itemFromFlipkart}
          renderItem={(item) => this._renderItem(item)}
        />
        <View style={styles.footer} />
      </View>
    );
  }
}

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
  footer: {
    backgroundColor: 'blue',
    height: 60,
    width: '100%',
    position: 'relative',
    bottom: 0,
    left: 0,
  },
  item: {
    width: '100%',
    height: 200,
    flexDirection: 'row',    
    
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  description: {
    flex: 3,
    marginLeft: 10,
  },
  itemName: {
    flex: 1.5,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  itemColor: {
    flex: 1,
    fontSize: 15, 
    color: 'rgba(0,0,0,0.5)',
    textAlignVertical: 'center',
  },
  review: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    height: '100%', 
    backgroundColor: 'green', 
    width: 60, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  rating: {
    fontSize: 15, 
    color: 'white', 
    marginLeft: 3, 
    paddingRight: 5,
  },
  priceContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  price: {
    fontSize: 18, 
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
  tag: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  fav: {
    paddingRight: 10,
    paddingTop: 20,
  },
});