import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import BrandLogoComponent from './modules/common/BrandLogo.component';
import RegisterFormComponent from './modules/register/RegisterForm.component';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }

  onKeyboardDidShow() {
    console.log('did show')
  }

  render() {
    return(
      <KeyboardAvoidingView
        style={registerStyle.view}
        behavior="height"
        enabled
      >
        <ScrollView 
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
        >
        <LinearGradient 
          colors={['#2089dc', '#68b9ff']}
          style={registerStyle.linearGradient}
        >
          <View style={registerStyle.viewContainer}>
            <BrandLogoComponent />
            <RegisterFormComponent />
          </View>
        </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const registerStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#2089dc',
    
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90 + '%',
  }
});

export default RegisterScreen;