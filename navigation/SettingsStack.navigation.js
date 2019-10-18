import React from 'react';
import Settings from '../src/screens/SettingsScreen/SettingsScreen';

import {
  createStackNavigator
} from 'react-navigation';

import HeaderActionButtonComponent from './common/components/HeaderActionButton.component';
import { headerStyle, headerTitleStyle } from './common/config.style';


const SettingsStackNavigation = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions:({navigation}) => {
      return{
        headerTitle: 'Settings',
        headerLeft: <HeaderActionButtonComponent onClick={navigation.openDrawer} type="drawer" />,
        headerStyle,
        headerTitleStyle
      }
    }
  }
})

export default SettingsStackNavigation;