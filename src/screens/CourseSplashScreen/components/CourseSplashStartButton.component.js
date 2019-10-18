import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Button } from 'react-native-elements';

class CourseSplashStartButtonComponent extends Component {
  render() {
    return(
      <View style={startBtnStyle.view}>
        <Button 
          title="Start now" 
          onPress={this.props.onClick}
          buttonStyle={startBtnStyle.button}
        />
      </View>
    )
  }
}

const startBtnStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default CourseSplashStartButtonComponent;