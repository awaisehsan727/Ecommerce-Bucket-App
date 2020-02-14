import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WooCommerce from '../Config'

export default class App extends React.Component {
  componentWillMount() {
    WooCommerce.get('products', {
    })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
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