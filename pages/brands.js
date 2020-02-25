import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WooCommerce from '../WooConfig'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      productslist: []
    }
  }
  componentWillMount() {
    WooCommerce.get('products', {
    })
      .then(res => {
        const data = res.data;
        this.setState({loading: true, productslist: data});
        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

});