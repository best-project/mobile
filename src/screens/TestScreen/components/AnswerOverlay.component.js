import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AnswerOverlayComponent extends Component {
  render() {
    const {type} = this.props;
    switch(type) {
      case true: 
        return(
          <View style={[overlayBoxStyle.view, {backgroundColor: '#45a647'}]}>
            <Text style={overlayBoxStyle.text}>Good!</Text>
          </View>
        );
      case false:
        return(
          <View style={[overlayBoxStyle.view, {backgroundColor: '#cf4146'}]}>
            <Text style={overlayBoxStyle.text}>Bad</Text>
          </View>
        );
      default:
        return null;
    }
  }
}

const overlayBoxStyle = StyleSheet.create({
  view: {
    position: 'absolute',
    width: 100 + '%',
    height: 100 + '%',
    zIndex: 1,
    opacity: 0.8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  }
});

export default AnswerOverlayComponent;