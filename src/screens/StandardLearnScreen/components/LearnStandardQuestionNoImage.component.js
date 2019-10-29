import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Speaker from "../../../common/components/Speaker";
import globalStyles from "../../../common/style/global.style";
import background_image from "../../../../assets/background_image.jpg";

const LearnStandardQuestionNoImageComponent = props => {
  return (
    <View style={questionStyle.view}>
      <View style={[questionStyle.imageView, globalStyles.shadows.light]}>
        <View style={[questionStyle.boxView, questionStyle.question]}>
          <ImageBackground
            source={background_image}
            style={questionStyle.imageBackground}
            imageStyle={questionStyle.imageStyle}
          >
            <Speaker
              toSpeech={props.data.word}
              color={globalStyles.colors.light}
            />
            <Text style={[questionStyle.text, questionStyle.questionText]}>
              {props.data.word}
            </Text>
          </ImageBackground>
        </View>

        <View style={[questionStyle.boxView, questionStyle.translate]}>
          <Text style={[questionStyle.text, questionStyle.translateText]}>
            {props.data.translate}
          </Text>
        </View>
      </View>
    </View>
  );
};

const questionStyle = StyleSheet.create({
  view: {
    flex: 4,
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "center"
  },
  imageView: {
    flex: 1,
    width: 95 + "%",
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2089dc"
  },
  imageBackground: {
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyles.colors.dark,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  imageStyle: {
    opacity: 0.1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  boxView: {
    justifyContent: "center",
    alignItems: "center"
  },
  question: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: globalStyles.colors.superdarkBlue,
    backgroundColor: globalStyles.colors.secondaryBlue,
    flex: 2
  },
  translate: {
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "#fff",
    flex: 1
  },
  text: {
    fontSize: 24,
    textAlign: "center"
  },
  questionText: {
    color: "#fff"
  },
  translateText: {
    color: globalStyles.colors.dark
  }
});

export default LearnStandardQuestionNoImageComponent;
