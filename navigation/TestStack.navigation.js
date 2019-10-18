import React from 'react';

import {
  createStackNavigator
} from 'react-navigation';

import HeaderActionButtonComponent from './common/components/HeaderActionButton.component';
import { headerStyle, headerTitleStyle } from './common/config.style';
import TestScreen from '../src/screens/TestScreen/TestScreen';


const TestStackNavigation = createStackNavigator({
  Settings: {
    screen: TestScreen,
    navigationOptions:({navigation}) => {
      return{
        headerTitle: 'Settings',
        headerLeft: <HeaderActionButtonComponent onClick={navigation.navigate('Home')} type="home" />,
        headerStyle,
        headerTitleStyle
      }
    }
  }
});

export default TestStackNavigation;