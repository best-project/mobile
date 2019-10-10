import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native';


class OverlayLoader extends Component {
  render() {
    const {color} = this.props;
    return(
      <View style={overlayLoaderStyle.view}>
        <ActivityIndicator 
          size={"large"}
          color={color}
        />
        <Text style={{color: color}}>Loading</Text>
      </View>
    ) 
  }
}

const overlayLoaderStyle = StyleSheet.create({
  view: {
    flex: 1,
    width: 100 + '%', 
    height: 100 + '%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
})

OverlayLoader.defaultProps = {
  color: '#fff',
  hasBackground: false
}

export default OverlayLoader;