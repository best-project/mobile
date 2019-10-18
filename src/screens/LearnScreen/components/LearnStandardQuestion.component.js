import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Speaker from '../../../common/components/Speaker';


const LearnStandardQuestionComponent = (props) => {
  return (
    <View style={questionStyle.view}>
      <View style={questionStyle.imageView}>
        <ImageBackground 
          source={{uri: props.data.image}}
          style={questionStyle.imageBackground}
          imageStyle={questionStyle.imageStyle}
        >
          <View style={[questionStyle.boxView, questionStyle.question]}>
            <Speaker toSpeech={props.data.word} />
            <Text style={questionStyle.text}>
              {props.data.word}
            </Text>
          </View>
          <View style={[questionStyle.boxView, questionStyle.translate]}>
            <Text style={questionStyle.text}>
              {props.data.translate}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const questionStyle = StyleSheet.create({
  view: {
    flex: 4,
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center'
  },
  imageView: {
    flex: 1,
    width: 95 + '%',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2089dc',
  },
  imageBackground: {
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5
  }, 
  boxView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  question: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#343434',
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  translate: {
    backgroundColor: 'rgba(255,255,255, 0.95)',
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5
  },
  text: {
    fontSize: 24,
    color: '#000'
  }
})

export default LearnStandardQuestionComponent;