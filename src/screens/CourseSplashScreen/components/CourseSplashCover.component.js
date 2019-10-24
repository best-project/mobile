import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const CourseSplashCoverComponent = props => {
  return (
    <View style={coverStyle.view}>
      <ImageBackground source={{ uri: props.course.image }} style={coverStyle.background}>
        <View style={coverStyle.textContainer}>
          <Text style={coverStyle.description}>{props.course.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const coverStyle = StyleSheet.create({
  view: {
    flex: 4,
    width: 100 + "%"
  },
  background: {
    width: 100 + "%",
    height: 100 + "%",
    opacity: 1,
    flex: 1,
    justifyContent: "flex-end",
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  textContainer: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.9
  },
  description: {
    textAlign: "center",
    color: "rgb(100,100,100)"
  }
});

export default CourseSplashCoverComponent;
