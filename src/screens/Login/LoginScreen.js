import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import BrandLogoComponent from './modules/common/BrandLogo.component';
import SocialLoginComponent from './modules/login/SocialLogin.component';
import LoginFormComponent from './modules/login/LoginForm.component';
import { ScrollView } from 'react-native-gesture-handler';

class LoginScreen extends Component {
  componentDidMount() {
    // if(this.props.Profile.token) {
    //   this.props.navigation.navigate('Home')
    // } 
  }

  render() {
    return(
      <KeyboardAvoidingView
        style={loginStyles.view}
        behavior="padding"
      >
        <ScrollView 
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
        >
          <LinearGradient 
            colors={['#2089dc', '#68b9ff']}
            style={loginStyles.linearGradient}
          >
            <View style={loginStyles.viewContainer}>
              <BrandLogoComponent />
              <LoginFormComponent navigation={this.props.navigation}/>
              <SocialLoginComponent />
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const loginStyles = StyleSheet.create({
  view: {
    flex: 2
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
})

const mapStateToProps = state => ({
  Profile: state.Profile
});

export default connect(mapStateToProps, {})(LoginScreen);