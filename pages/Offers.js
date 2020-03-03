import React, { Component } from 'react';

import { StyleSheet, View, ActivityIndicator, FlatList, Text, Image, Alert } from 'react-native';

import WooCommerce from '../WooConfig'

export default class Offers extends Component {

  constructor(props) {

    super(props);

    this.state = {
      dataSource: [],
      isLoading: true

    }
  }

  GetItem(flower_name) {

    Alert.alert(flower_name);

  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  componentDidMount() {
    WooCommerce.get('products', { 'per_page': 100 })
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

  render() {

    if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ActivityIndicator size="large" />

        </View>

      );

    }
    return (

      <View style={styles.MainContainer}>

        <FlatList

          data={this.state.dataSource}

          ItemSeparatorComponent={this.FlatListItemSeparator}

          renderItem={({ item }) =>

          <TouchableOpacity activeOpacity={0.9} onPress={this.GetListItem.bind(this, item.name)}>
          <View style={styles.container} >
            <Image
              source={{ uri: item.images[0].src }}
              style={styles.Image}
            />
            <Text style={styles.welcome} >{item.name} </Text>
          </View>
        </TouchableOpacity>

          }

          keyExtractor={(item, index) => index.toString()}

        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },

  imageView: {

    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7

  },

  textView: {

    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000'

  }

});