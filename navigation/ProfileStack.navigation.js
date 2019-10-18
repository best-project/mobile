import React from 'react';

import {
  createStackNavigator
} from 'react-navigation';

import HeaderActionButtonComponent from './common/components/HeaderActionButton.component';
import { headerStyle, headerTitleStyle } from './common/config.style';
import ProfileScreen from '../src/screens/ProfileScreen/ProfileScreen';


const ProfileStackNavigation = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions:({navigation}) => {
      return{
        headerTitle: 'Profile',
        headerLeft: <HeaderActionButtonComponent onClick={navigation.openDrawer} type="drawer" />,
        headerStyle,
        headerTitleStyle
      }
    }
  }
});

export default ProfileStackNavigation;