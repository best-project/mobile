import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Speaker from '../../../common/Speaker';

class TestQuestionModule extends Component {
  render() {
    const {question} = this.props;
    return(
      <View style={questionStyle.view}>
        <View style={questionStyle.questionView}>
          <Speaker toSpeech={question} lang="en" />
          <Text style={questionStyle.text}>{question}</Text>
        </View>
      </View>
    );
  }
}
const questionStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  questionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default TestQuestionModule;