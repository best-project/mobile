import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import IconButton from '../../../../components/common/IconButton';

class SocialLoginComponent extends Component {
  _onFacebookClick() {
    console.log('fb click')
  }

  _onTwitterClick() {
    console.log('twitter click')
  }

  _onInstagramClick() {
    console.log('ig click')
  }
  render() {
    return (
      <View style={socialLoginsStyle.view}> 
        <Text style={socialLoginsStyle.title}>Or login with</Text>
        <View style={socialLoginsStyle.containerView}>
          <IconButton 
            name="facebook"
            size={50}
            color="#005daa"
            containerColor="#fff"
            onPress={this._onFacebookClick}
          />
          <IconButton 
            name="twitter"
            size={50}
            color="#005daa"
            containerColor="#fff"
            onPress={this._onTwitterClick}
          />
          <IconButton
            name="instagram"
            size={50}
            color="#005daa"
            containerColor="#fff"
            onPress={this._onInstagramClick}
          />
        </View>
      </View>
    ) 
  }
}

const socialLoginsStyle = StyleSheet.create({
  view: {
    flex: 1,
    width:90 + '%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff'
  },
  containerView: {
    marginTop: 10,
    width: 100 + '%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default SocialLoginComponent;