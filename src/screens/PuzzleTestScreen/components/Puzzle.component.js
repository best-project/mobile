import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'

class PuzzleComponent extends Component {
  render() {
    const {name, onPuzzlePress, isDisabled} = this.props
    return (
        <TouchableOpacity
          style={[puzzleStyle.box, isDisabled ? {backgroundColor: '#97c0e1'} : null]}
          activeOpacity={0.7}
          onPress={onPuzzlePress}
          disabled={isDisabled}
        >
          <Text style={[puzzleStyle.boxText, isDisabled ? {opacity: 0} : null]}>{name}</Text>
        </TouchableOpacity>
    )
  }
}

PuzzleComponent.defaultProps = {
  isDisabled: false,
}

const puzzleStyle = StyleSheet.create({
  box: {
    backgroundColor: '#2089dc',
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  boxText: {
    fontSize: 16,
    color: '#fff'
  }
});
export default PuzzleComponent;