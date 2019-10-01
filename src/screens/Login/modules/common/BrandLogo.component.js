import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import Logo from '../../../../components/common/Logo';

class BrandLogoComponent extends Component {
  render() {
    return (
      <View style={brandLogoStyles.view}>
        <Logo />
      </View>
    );
  }
}

const brandLogoStyles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default BrandLogoComponent;