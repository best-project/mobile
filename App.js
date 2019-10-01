import React, {Component} from 'react';

//LOAD SCREENS
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Login/RegisterScreen';
import Profile from './src/screens/ProfileScreen/ProfileScreen';
import CourseSplashScreen from './src/screens/CourseSplashScreen/CourseSplashScreen';
import LearnStandard from './src/screens/LearnScreen/LearnStandardScreen';
import CreateCourse from './src/screens/CreateCourseScreen/CreateCourseScreen';
import Home from './src/screens/HomeScreen/HomeScreen';
import Dashboard from './src/screens/DashBoardScreen/modules/DashboardScreen';
import Settings from './src/screens/SettingsScreen/SettingsScreen';
import TestScreen from './src/screens/TestScreen/TestScreen';
import PuzzleTestScreen from './src/screens/PuzzleTestScreen/PuzzleTestScreen';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

//REDUX INIT
import { Provider } from 'react-redux';
import store from './store';

//FONT LOADING
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//REACT-NAVIGATION
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions:({navigation}) => {
      return {
        header: null,
      }
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions:({navigation}) => {
      return {
        header: null,
      }
    }
  }
})


const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions:({navigation}) => {
      return{
        headerTitle: 'Profile',
        headerLeft: (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=> navigation.openDrawer()}
          >
            <Icon 
              name="bars" 
              type="font-awesome"
              color="#fff"
              containerStyle={{paddingLeft: 10}}
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#2089dc',
          elevation: 0
        },
        headerTitleStyle: {
          fontWeight: 'normal',
          color: '#fff'
        }
      }
    }
  },
  CourseSplash: {
    screen: CourseSplashScreen,
    navigationOptions:({navigation}) => {
      return{
        headerLeft: (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=> navigation.goBack()}
          >
            <Icon 
              name="arrow-left" 
              type="font-awesome"
              color="#fff"
              containerStyle={{paddingLeft: 10}}
            />
          </TouchableOpacity>
          
        ),
        headerStyle: {
          backgroundColor: '#2089dc',
          elevation: 0
        },
        headerTitleStyle: {
          fontWeight: 'normal',
          color: '#fff'
        }
      }
    }
  }
})

//BOTTOM-NAVIGATION
const HomeTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        return <Icon name="home" type="font-awesome" color={tintColor} />
      }
    }
  },
  ProfileStack: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon:({tintColor}) => {
        return <Icon name="user" type="font-awesome" color={tintColor} />
      }
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon:({tintColor}) => {
        return <Icon name="cogs" type="font-awesome" color={tintColor} />
      }
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(255,255,255, 0.2)',
    style: {
      backgroundColor: '#2089dc',
      justifyContent: 'center',
      alignContent: 'center'
    },
    //showLabel:false
  }, 
  navigationOptions:({navigation}) => {
    return {
      header: null,
    }
  }
})

//STACK-NAVIGATION
const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator
})

//DRAWER-NAVIGATION
const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeStackNavigator}
})

//SWITCH-NAVIGATION
const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginStack},
  Register: {screen: RegisterScreen},
  Home: {screen: AppDrawerNavigator}, //app drawer navigation
  Profile: {screen: Profile},
  Dashboard: {screen: Dashboard},
  Settings: {screen: Settings},
  LearnStandard: {screen: LearnStandard}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoading: true
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'brandon-grotesque-regular': require('./assets/fonts/brandon-grotesque-regular.ttf')
    })
    this.setState({fontLoading: false})
  }
  render() {
    if(this.state.fontLoading) {
      return <AppLoading />
    } else {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );
    }
  }
}

export default App;