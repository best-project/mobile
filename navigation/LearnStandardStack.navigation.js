import React from 'react';

import {
  createStackNavigator
} from 'react-navigation';

import HeaderActionButtonComponent from './common/components/HeaderActionButton.component';
import { headerStyle, headerTitleStyle } from './common/config.style';
import LearnStandardScreen from '../src/screens/LearnScreen/LearnStandardScreen';


const LearnStandardStackNavigation = createStackNavigator({
  LearnStandard: {
    screen: LearnStandardScreen,
    navigationOptions:({navigation}) => {
      return{
        headerLeft: <HeaderActionButtonComponent onClick={() => {navigation.navigate('Home')}} type="home" />,
        headerStyle,
        headerTitleStyle
      }
    }
  }
});

export default LearnStandardStackNavigation;