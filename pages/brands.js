import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Alert,
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
      JSONResult: "",
    }
  }
  updateSearch = search => {
    this.setState({ search });
  };
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
        console.log(responseJson)
      })
      .catch((error) => {
        console.log(error.responseJson.data);
      });


  }
  GetListItem(name) {

    Alert.alert(name);
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
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
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
                  height: 45,
                  width: '95%',
                  marginLeft: 10
                }}
                placeholder="Search ....."
                onChangeText={this.updateSearch}
                value={search}
              />
            </View>
        <FlatList
          data={this.state.JSONResult}
          ItemSeparatorComponent={this.ItemSeparatorLine}
          renderItem={({ item }) =>
            <View style={styles.Touchable} >
              <TouchableOpacity activeOpacity={0.9} onPress={this.GetListItem.bind(this, item.name)}>
                <Image
                  source={{ uri: item.images[0].src }}
                  style={styles.Image}
                />
                <View style={styles.nameView} >
                  <Text style={styles.Textview}>{item.name} </Text>
                </View>
                <View style={styles.addToCarContainer}>
                  <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                    <Text style={styles.shareButtonText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          }
          numColumns={2}
          keyExtractor={(item, index) => index}
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
    marginLeft: 3.5,
    justifyContent:'center',
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
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButton: {
    height:30,
    width:'70%',
    alignSelf:'center',
    alignItems: 'center',
    borderRadius:15,
    backgroundColor: "#00BFFF",
  },
  addToCarContainer:
  {
   justifyContent:'center',
   margin:10,
  }
});