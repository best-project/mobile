import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import LogoComponent from '../../../../common/LogoComponent';

class BrandLogoComponent extends Component {
  render() {
    return (
      <View style={brandLogoStyles.view}>
        <LogoComponent />
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