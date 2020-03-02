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
import WooCommerce from '../WooConfig'
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }
  componentWillMount() {
    WooCommerce.get('products/Categories', { 'per_page': 100 })
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
       console.log(responseJson)
      })
      .catch((error) => {
        console.log(error.responseJson.data);
      });
  }
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
  renderItem = (data) =>
   {
    if (data.item.image == null) 
    {
      return (<TouchableOpacity style={styles.lists}>
        <Image style={styles.image} source={{ uri: 'https://bktstaging.devzonesolutions.com/wp-content/uploads/woocommerce-placeholder.png' }} />
        <Text style={styles.Text}>{data.item.name}</Text>
      </TouchableOpacity>)
    }
    else 
    {
      return (<TouchableOpacity style={styles.lists}>
        <Image style={styles.image} source={{ uri: data.item.image.src }} />
        <Text style={styles.Text}>{data.item.name}</Text>
      </TouchableOpacity>)
    }
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
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
});