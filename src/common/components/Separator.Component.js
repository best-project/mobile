import React from "react";
import { View, StyleSheet } from "react-native";

const SeparatorComponent = props => {
  return <View style={[separatorStyle.view, { width: props.width + "%", backgroundColor: props.color }]}></View>;
};

SeparatorComponent.defaultProps = {
  width: 80,
  color: "#fff"
};

const separatorStyle = StyleSheet.create({
  view: {
    height: 1,
    width: 90 + "%",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10
  }
});

export default SeparatorComponent;
