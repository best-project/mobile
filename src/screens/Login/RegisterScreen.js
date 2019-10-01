import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  BackHandler,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import BrandLogoComponent from './modules/common/BrandLogo.component';
import RegisterFormComponent from './modules/register/RegisterForm.component';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.handleBack = (() => {
      console.log('back')
    }).bind(this);
  }

  render() {
    return(
      <View style={registerStyle.view}>
        <LinearGradient 
          colors={['#2089dc', '#68b9ff']}
          style={registerStyle.linearGradient}
        >
          <View style={registerStyle.viewContainer}>
            <BrandLogoComponent />
            <RegisterFormComponent />
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const registerStyle = StyleSheet.create({
  view: {
    flex: 1,
   },
   linearGradient: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   viewContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     width: 90 + '%',
   }
});

export default RegisterScreen;