import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

import AnswerOverlayComponent from '../components/AnswerOverlay.component';

class AnswerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false
    }
  }

  onPress() {
    this.setState({
      showOverlay: true
    });
    this.props.blockDoublePress();
    setTimeout(() => {
      this.setState({
        showOverlay: false
      });
    }, 800)
    setTimeout(() => {
      this.props._onAnswerPress(this.props.valid);
    }, 1000)
  }

  render() {
    const {answer, image, valid, answered} = this.props;
    const {showOverlay} = this.state;
    return (
      <View style={answerStyle.view}>
        {showOverlay ? <AnswerOverlayComponent type={valid} /> : null}
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={answered}
          onPress={() => this.onPress()}
        >
          <ImageBackground
            source={{uri: image}}
            style={answerStyle.imageBackground}
            imageStyle={answerStyle.imageStyle}
          >
            <View style={answerStyle.translateView}>
              <Text style={answerStyle.translateText}>{answer}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}
const answerStyle = StyleSheet.create({
  view: {
    width: 150,
    height: 150,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000'
  },
  imageBackground: {
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5,
  }, 
  translateView: {
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  translateText: {
    fontSize: 16,
  }
});

export default AnswerComponent;