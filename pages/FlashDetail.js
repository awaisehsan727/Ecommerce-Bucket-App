import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
export default class FlashDetail extends React.Component {
  //Profile Screen to show from Open profile button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FlashDetail</Text>
      </View>
    );
  }
}