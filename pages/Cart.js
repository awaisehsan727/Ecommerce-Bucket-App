import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  Image,
  Alert,
  Modal,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import WooCommerce from '../WooConfig'
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONResult: [],
      loading: true,
      modalVisible: false,
      count:   0,
    }
    this.arrayholder = [];
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  _incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  _DecrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  componentDidMount() {
    WooCommerce.get('products', { 'per_page': 100 })
      .then((responseJson) => {
        this.setState({
          loading: false,
          JSONResult: responseJson
        })
        //console.log(responseJson)
        this.arrayholder = responseJson;
      })
      .catch((error) => {
        console.log(error.responseJson.data);
      });
  }
  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }
  ItemSeparatorLine = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#111a0b",
        }}
      />
    );
  }
  render() 
  {
    const { navigation } = this.props;  
    const valu = navigation.getParam('parent', '');
    if (this.state.loading) 
    {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.JSONResult}
          renderItem={({ item }) => {
            if(item.id==valu)
            {
             return (<ScrollView>
               <View style={{ alignItems: 'center', marginHorizontal: 30, marginTop: 15 }}>
                 <Image style={styles.productImg} source={{ uri: data.images[0].src }} />
                 <Text style={styles.name}>{data.name}</Text>
                 <Text style={styles.price}>Rs{data.price}</Text>
               </View>
               <View style={styles.Iconlis}>
               <TouchableOpacity  onPress={() => this._DecrementCount()}>
                 <Image style={styles.btnSize} source={require('../images/minus.png')} />
                 </TouchableOpacity>
                 <Text style={styles.Textvi}>  {this.state.count}</Text>
                 <TouchableOpacity  onPress={() => this._incrementCount()}>
                 <Image style={styles.btnSize}  source={require('../images/add.png')} />
                 </TouchableOpacity>
               </View>
               
               <View style={styles.separator}></View>
               <View style={styles.addToCarContainers}>
                 <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                   <Text style={styles.shareButtonTexts}>Add To Cart</Text>
                 </TouchableOpacity>
               </View>
             </ScrollView>)
            }
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: 5,
    backgroundColor: 'white'
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  Touchable: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3.5,
    justifyContent: 'center',
    padding: 5,
    borderWidth: 2,
    marginTop: 5,
  },
  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textview:
  {
    fontSize: 15,
    textAlign: 'center',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    color: 'black',
    width: 200,
  },
  instructions: {
    color: 'black',
    marginBottom: 5,
  },
  Image:
  {
    width: '95%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButtons: {
    height: 30,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: "#00BFFF",
  },
  addToCarContainer:
  {
    justifyContent: 'center',
    margin: 10,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold'
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentSizes: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    marginTop: 7,
  },
  shareButtonTexts: {
    color: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  addToCarContainers: {
    marginHorizontal: 30
  },
  Iconlis:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  Textvi: {
    height: 40,
    width: 50,
    borderColor: '#778899',
    borderWidth: 1,
    color:'black',
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
  },
});