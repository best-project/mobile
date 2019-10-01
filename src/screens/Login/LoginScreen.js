import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import BrandLogoComponent from './modules/common/BrandLogo.component';
import SocialLoginComponent from './modules/login/SocialLogin.component';
import LoginFormComponent from './modules/login/LoginForm.component';

class LoginScreen extends Component {
  componentDidMount() {
    if(this.props.Profile.token) {
      this.props.navigation.navigate('Home')
    }
    
  }
  render() {
    return(
      <View style={loginStyles.view}>
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
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
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
})

const mapStateToProps = state => ({
  Profile: state.Profile
});

export default connect(mapStateToProps, {})(LoginScreen);