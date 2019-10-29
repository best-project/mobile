import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import * as Speech from "expo-speech";
import globalStyles from "../style/global.style";

const Speaker = props => {
  useEffect(() => {
    if (props.Settings.isSoundEnabled) {
      useVoice(props.toSpeech);
    }
  }, [props.toSpeech]);

  function useVoice(value) {
    let lang = "en";
    if (props.lang) {
      lang = props.lang;
    }
    Speech.speak(value, {
      language: lang,
      pitch: 1,
      rate: 1
    });
  }

  function speakerPress() {
    useVoice(props.toSpeech);
  }

  return (
    <TouchableOpacity onPress={speakerPress} activeOpacity={0.7}>
      <Icon
        name="volume-up"
        type="font-awesome"
        color={props.color}
        size={30}
      />
    </TouchableOpacity>
  );
};

Speaker.defaultProps = {
  color: globalStyles.colors.dark
};

const mapStateToProps = state => ({
  Settings: state.Settings
});

export default connect(
  mapStateToProps,
  {}
)(Speaker);
