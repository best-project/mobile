import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import IconButtonComponent from '../../../../common/components//IconButton.component';
import socialLoginsService from '../../../../common/services/social-logins.service';

class SocialLoginComponent extends Component {
  _onFacebookClick() {
    socialLoginsService.facebookLogin()
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
          <IconButtonComponent
            name="facebook"
            size={50}
            color="#005daa"
            containerColor="#fff"
            onPress={this._onFacebookClick}
          />
          <IconButtonComponent 
            name="twitter"
            size={50}
            color="#005daa"
            containerColor="#fff"
            onPress={this._onTwitterClick}
          />
          <IconButtonComponent
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