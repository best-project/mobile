import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import logo from '../../../assets/logo.png';

class LogoComponent extends Component {
  render() {
    return(
      <View style={logoStyles.view}>
        <Image
          style={logoStyles.logoImage}
          source={logo}
        />
        <Text style={logoStyles.logoText}>Learn.IT</Text>
        <Text style={logoStyles.logoSubText}>Let's talk more</Text>
      </View>
    )
  }
}

const logoStyles = StyleSheet.create({
  view: {
    alignItems: 'center'
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontFamily: 'brandon-grotesque-regular',
    fontSize: 40,
    color: '#fff'
  },
  logoSubText: {
    fontFamily: 'brandon-grotesque-regular',
    fontSize: 10,
    color: '#fff',
  }
})

export default LogoComponent;