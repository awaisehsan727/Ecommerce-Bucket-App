import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
const {width} =Dimensions.get('screen');
export default class Barcode extends PureComponent {
  constructor(props) {
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false
    }
  }
  onBarCodeRead = (e) => {
    this.props.navigation.navigate('Bucket')  ;
  }
  render() {
    const leftTop = {
      borderLeftWidth:5,
      borderTopWidth:5,
      borderColor:'white'
    };
    const leftBottom = {
      borderLeftWidth:5,
      borderBottomWidth:5,
      borderColor:'white'
    };
    const rightTop = {
      borderRightWidth:5,
      borderTopWidth:5,
      borderColor:'white'
    };
    const rightBottom = {
      borderRightWidth:5,
      borderBottomWidth:5,
      borderColor:'white'
    };
    return (
      <View style={{flex:1}}>
        <RNCamera
          style={{...StyleSheet.absoluteFill}}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this.onBarCodeRead}
          keepAwake={true}
          defaultOnFocusComponent
          clearWindowBackground={true}
          playSoundOnCapture={true}>
           <View style={{...StyleSheet.absoluteFill,alignItems:'center',justifyContent:'center'}}>
             <View style={{width:width/2,height:width/2}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:1, ...leftTop}}/>
                 <View style={{flex:1}}/>
                 <View style={{flex:1, ...rightTop}}/>
               </View>
               <View style={{flex:1}}/>
               <View style={{flex:1,flexDirection:'row'}}>
               <View style={{flex:1,...leftBottom}}/>
                 <View style={{flex:1}}/>
                 <View style={{flex:1, ...rightBottom}}/>
               </View>
             </View>
             </View> 
        </RNCamera>
      </View>
    );
  }
  handleTourch(value) {
    if (value === true) {
      this.setState({ torchOn: false });
    } else {
      this.setState({ torchOn: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

});
