import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Bucket extends Component {
  render() {
    return (
       <WebView source={{ uri: 'https://bucket.pk/' }} />     
    );
  }
}