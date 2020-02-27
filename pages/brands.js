import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import WooCommerce from '../WooConfig'
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    WooCommerce.get('products', {
    })
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
    <TouchableOpacity style={styles.list}>
      <Image style={styles.image} source={{ uri: data.item.images[0].src }} />
      <Text style={styles.Text}>{data.item.name}</Text>
      <Text style={styles.Text}>{data.item.slug}
      </Text>
    </TouchableOpacity>
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
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "lightblue",
   
  },
  image: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    marginTop:10
  },
  Text: {
    fontSize: 20,
    alignSelf: 'center'

  },
});