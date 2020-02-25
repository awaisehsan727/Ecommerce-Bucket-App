
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './pages/Splash';
import Tabbar from './Tabbar';
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      },
    },
    Tabbar: { screen: Tabbar,
      navigationOptions: {
        header: null
      },},
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
    initialRouteName: 'Splash'
  }
);
export default createAppContainer(HomeStack);
