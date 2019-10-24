import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import * as Speech from "expo-speech";

class Speaker extends Component {
  voicePress(value) {
    let lang = "en";
    if (this.props.lang) {
      lang = this.props.lang;
    }
    Speech.speak(value, {
      language: lang,
      pitch: 1,
      rate: 1
    });
  }
  _speakerPress() {
    this.voicePress(this.props.toSpeech);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this._speakerPress()} activeOpacity={0.7}>
        <Icon name="volume-up" type="font-awesome" color="#1b1b1b" size={30} />
      </TouchableOpacity>
    );
  }
}

export default Speaker;
