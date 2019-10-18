import React, {Component} from 'react';

//LOAD SCREENS
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import CreateCourse from './src/screens/CreateCourseScreen/CreateCourseScreen';
import Dashboard from './src/screens/DashBoardScreen/modules/DashboardScreen';
import TestScreen from './src/screens/TestScreen/TestScreen';
import PuzzleTestScreen from './src/screens/PuzzleTestScreen/PuzzleTestScreen';

import { Icon } from 'react-native-elements';
import { Text } from 'react-native';

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
} from 'react-navigation';

import HomeStackNavigation from './navigation/HomeStack.navigation';
import LoginStackNavigation from './navigation/LoginStack.navigation';
import ProfileStackNavigation from './navigation/ProfileStack.navigation';
import SettingsStackNavigation from './navigation/SettingsStack.navigation';
import CourseManagerScreen from './src/screens/CourseManagerScreen/CourseManagerScreen';

//BOTTOM-NAVIGATION
const DashboardTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigation,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        return <Icon name="home" type="font-awesome" color={tintColor} />
      },
      tabBarLabel: ({tintColor}) => {
        return <Text style={{textAlign: 'center', color: tintColor, fontSize: 12}}>Home</Text>
      }
    }
  },
  ProfileStack: {
    screen: ProfileStackNavigation,
    navigationOptions: {
      tabBarIcon:({tintColor}) => {
        return <Icon name="user" type="font-awesome" color={tintColor} />
      },
      tabBarLabel: ({tintColor}) => {
        return <Text style={{textAlign: 'center', color: tintColor, fontSize: 12}}>Profile</Text>
      }
    }
  },
  Settings: {
    screen: SettingsStackNavigation,
    navigationOptions: {
      tabBarIcon:({tintColor}) => {
        return <Icon name="cogs" type="font-awesome" color={tintColor} />
      },
      tabBarLabel: ({tintColor}) => {
        return <Text style={{textAlign: 'center', color: tintColor, fontSize: 12}}>Settings</Text>
      }
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(255,255,255, 0.2)',
    style: {
      backgroundColor: '#2089dc'
    }
  }, 
  navigationOptions:() => {
    return {
      header: null,
    }
  }
})

//DRAWER-NAVIGATION
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: DashboardTabNavigator}
})

//SWITCH-NAVIGATION
const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginStackNavigation},
  Home: {screen: AppDrawerNavigator}, //app drawer navigation
  Profile: {screen: ProfileScreen},
  Dashboard: {screen: Dashboard},
  Settings: {screen: SettingsStackNavigation},
  CreateCourse: {screen: CreateCourse},
  Test: {screen: TestScreen},
  PuzzleTest: {screen: PuzzleTestScreen}
},);

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