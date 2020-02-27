import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import Splash from './pages/Splash';
import Barcode from './pages/Barcode';
import Categories from './pages/Categories';
import FlashDetail from './pages/FlashDetail';
import Offers from './pages/Offers';
import brands from './pages/brands';
import Topselection from './pages/Topselection';
import Cart from './pages/Cart';
import Notisfication from './pages/Notisfication';
import { Image } from 'react-native';
import Account from './pages/Accounts';
import WebVi from './pages/WebVi';
import Login from './pages/Login';
import Signup from './pages/Signup'
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Barcode: { screen: Barcode },
    Categories: { screen: Categories },
    FlashDetail: { screen: FlashDetail },
    brands: { screen: brands },
    Offers: { screen: Offers },
    WebVi:{screen:WebVi},
    Topselection: { screen: Topselection },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      },
    },
  },
  {
    defaultNavigationOptions: {

      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#315660',
      },
      headerTintColor: 'white',
      //Header title
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#315660',
      },
      headerTintColor: 'white',
      //Header title
    },
  }
);
const NotisficationStack = createStackNavigator(
  {
    Notisfication: { screen: Notisfication },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#315660',
      },
      headerTintColor: 'white',
      //Header title
    },
  }
);
const CartStack = createStackNavigator(
  {
    Cart: { screen: Cart }
    //Defination of Navigaton from setting screen
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#315660',
      },
      headerTintColor: 'white',
      //Header title
    },
  }
);
const AccountsSctack = createStackNavigator(
  {
    Account: { screen: Account },
    Login:{screen: Login},
    Signup:{screen:Signup}
    //Defination of Navigaton from setting screen
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#315660',
      },
      headerTintColor: 'white',
      //Header title
    },
  }
);
const Tabbar = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Notisfication: { screen: NotisficationStack },
    Cart: { screen: CartStack },
    Account: { screen: AccountsSctack },
    // Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Image
            source={require('./images/Home.png')}
            style={{ height: 25, width: 25, }}
            focused={focused}
            tintColor={tintColor}
          />;
        }
        if (routeName === 'Notisfication') {
          return <Image
            source={require('./images/Notification.png')}
            style={{ height: 25, width: 25, }}
            focused={focused}
            tintColor={tintColor}
          />;
        }
        if (routeName === 'Cart') {
          return <Image
            source={require('./images/Cart.png')}
            style={{ height: 25, width: 25, }}
            focused={focused}
            tintColor={tintColor}
          />;
        }
        if (routeName === 'Account') {
          return <Image
            source={require('./images/Account.png')}
            style={{ height: 25, width: 25, }}
            focused={focused}
            tintColor={tintColor}
          />;
        }
        if (routeName === 'Setting') {
          return <Image
            source={require('./images/Account.png')}
            style={{ height: 25, width: 25, }}
            focused={focused}
            tintColor={tintColor}
          />;
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: 'brown',
      inactiveTintColor: 'black',
    },
  }
);
export default createAppContainer(Tabbar);
