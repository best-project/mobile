import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native'; 

import { Button } from 'react-native-elements';


const LearnStandardNextButtonComponent = (props) => {
  return (
    <View style={nextButtonStyle.view}>
      <Button title="Next" containerStyle={nextButtonStyle.btn} onPress={props.onPress}/>
    </View>
  )
}

const nextButtonStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 50 + '%'
  }
})

export default LearnStandardNextButtonComponent;