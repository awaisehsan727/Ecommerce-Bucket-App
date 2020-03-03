import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class CASUAL_SHOES extends Component {
  render() {
    return (
       <WebView source={{ uri: 'https://bucket.pk/casual-shoes-for-men/' }} />     
    );
  }
}