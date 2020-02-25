import React, { Component } from 'react';
import { View } from 'react-native';
//import { WebView } from 'react-native-webview';

export default class WebVi extends Component {
  render() {
    const { navigation } = this.props;  
    const Value = navigation.getParam('Value', 'No_Value');
    const Web= JSON.stringify(Value);
    return (
     <View>     
     </View>
    );
  }
}