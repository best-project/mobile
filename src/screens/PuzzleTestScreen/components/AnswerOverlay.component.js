import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class AnswerOverlayComponent extends Component {
  render() {
    const {isValid} = this.props;
    return(
      <View style={[answerOverlayStyle.view, isValid ? {backgroundColor: '#83bb14'} : {backgroundColor: '#bb2115'}]}>
      <Text style={answerOverlayStyle.text}>
        {this.props.children}
      </Text>
    </View>
    )
  }
}

const answerOverlayStyle = StyleSheet.create({
  view: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'center',
    borderRadius: 5,
  }, 
  text: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#fff'
  }
});


export default AnswerOverlayComponent;