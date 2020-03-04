import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import WooCommerce from '../WooConfig';
import { SearchBar } from 'react-native-elements';
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
    this.arrayholder = [];
  }
  componentWillMount() {
    WooCommerce.get('products/Categories/', { 'per_page': 100 })
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      // console.log(responseJson)
        this.arrayholder = responseJson;
      })
      .catch((error) => {
        console.log(error.responseJson.data);
      });
  }
  GetItem(name) {
    Alert.alert(name)
  //   this.props.navigation.navigate('Offers', {  
  //     parentId: parent,   
  // })  ;
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
      dataSource: newData,
    });
  };
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width: "100%",
        backgroundColor: "white",
      }}
      />
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
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
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => {
            console.log(item)
            if (item.image == null) {
              
              return (
                <TouchableOpacity activeOpacity={0.9} onPress={this.GetItem.bind(this, item.name)}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Image style={styles.imageView} source={{ uri: 'https://bktstaging.devzonesolutions.com/wp-content/uploads/woocommerce-placeholder.png' }} />
                  <Text style={styles.textView} >{item.name}</Text>
                </View>
                </TouchableOpacity>
              )
            }
            else {
              return (
                <TouchableOpacity activeOpacity={0.9} onPress={this.GetItem.bind(this, item.name)}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image style={styles.imageView}  source={{ uri: item.image.src }} />
                <Text style={styles.textView} >{item.name}</Text>
              </View>
              </TouchableOpacity>)
            }
          }
          }
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
    marginTop:5,
    backgroundColor:'white'
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  lists: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Tabs:
  {
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    position: 'relative',
  }, list: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  listContainer: {
    alignItems: 'center'
  },
  menuBox: {
    backgroundColor: "#DCDCDC",
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10
  },
  Text: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7

  },
  textView: {

    width: 150,
    textAlignVertical: 'center',
    padding: 10,
    color: '#000'

  }
});