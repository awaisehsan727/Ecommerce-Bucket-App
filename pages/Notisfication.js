import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default class Notisfication extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  _incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._incrementCount()}>
        <View
          style={styles.container}
        >
          <Text style={{ justifyContent: 'center', color: 'black' }}>{this.props.text}</Text>
          <Text style={{ justifyContent: 'center', color: 'black' }}>{this.state.count}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 3.5,
    backgroundColor: 'white'
  },
});