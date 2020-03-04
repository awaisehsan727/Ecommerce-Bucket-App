import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Image,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import WooCommerce from '../WooConfig'
export default class brands extends Component {


  constructor(props) {
    super(props);
    this.getListCall = this.getListCall.bind(this);
    this.GetListItem = this.GetListItem.bind(this);
    this.state = {
      JSONResult: [],
      modalVisible: false,
    }
    this.arrayholder = [];
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.getListCall();
  }
  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }
  getListCall() {
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
  GetListItem(name) {

    Alert.alert(name);
  }
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      JSONResult: newData,
    });
  };

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
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}>
          <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca"}}/>
            <Text style={styles.name}>Super Soft T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
          <View style={styles.contentColors}>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> 
          </View>
          <View style={styles.contentSize}>
            <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity> 
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainers}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
        </Modal>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <SearchBar
            inputContainerStyle={{
              backgroundColor: 'white', borderWidth: 1, borderBottomWidth: 1,
              borderRadius: 55, height: 35,
            }}
            searchIcon={{ color: 'black' }}
            cancelIcon={{ color: 'black' }}
            containerStyle={{
              backgroundColor: 'white', borderWidth: 0,
              borderBottomColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: 'white',
              borderTopColor: 'white',
              borderRadius: 55,
              height: 50,
              width: '95%',
              marginLeft: 10
            }}
            placeholder="Search ....."
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        </View>
        <FlatList
          data={this.state.JSONResult}
          ItemSeparatorComponent={this.ItemSeparatorLine}
          renderItem={({ item }) => {
            if (item.categories.name == null) {
              console.log('not found record')
            }
            else {
              console.log(item.categories.name)
            }

            return (<View style={styles.Touchable} >
              <Image
                source={{ uri: item.images[0].src }}
                style={styles.Image}
              />
              <View style={styles.nameView} >
                <Text style={styles.Textview}>{item.name} </Text>
              </View>
              <View style={styles.addToCarContainer}>
                <TouchableOpacity style={styles.shareButton} onPress={() => {
                  this.setModalVisible(true);
                }}>
                  <Text style={styles.shareButtonText}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            )
          }
          }
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 3.5,
    backgroundColor: 'white'
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
    margin: 8,
    color: 'black',
    width: 150,
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
  shareButton: {
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
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainers:{
    marginHorizontal:30
  }   
});