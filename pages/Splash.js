import React from 'react';
import { View, Text,StatusBar,Image,ImageBackground } from 'react-native';

class Splash extends React.Component {
    static navigationOptions = {
      headerShown: false
      };
  componentWillMount() {
    setTimeout(() => {
        this.props.navigation.replace('Tabbar');
    }, 1000);
}
  render() {
    return (
      <View style={styles.viewStyles}>
          <ImageBackground source={require('../images/Back.jpg')} style={styles.BackImage}>
          <StatusBar backgroundColor="white" barStyle="light-content" />
          <Image style={styles.buck} source={require('../images/buck.png')} />
        <Text style={styles.Shopping}>
          Shopping Made Easier
        </Text>
        <Text style={styles.Power}>
          Powerd By
        </Text>
        <Image style={styles.Dev} source={require('../images/logo.png')} />
        </ImageBackground>
      </View>
    );
  }
}
const styles = {
  viewStyles: {
    flex: 1,
  },
  BackImage:
  {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%', 
    height: '100%'
  },
  Shopping: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Power: {
    marginTop: 200,
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
  },
  buck:
  {
     marginTop: 100,
     width: 200,
     height: 70,
  },
  Dev:
  {
    marginBottom:10,
    width: 136,
    height: 30,
  }
}

export default Splash;