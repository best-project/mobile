import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import globalStyles from "../style/global.style";

class ProgressBar extends Component {
  render() {
    const { progressLevel, backgroundColor } = this.props;
    return (
      <View style={[progressBarStyle.progressBar, { backgroundColor: backgroundColor }]}>
        <View style={[progressBarStyle.progressBarInner, { width: progressLevel + "%" }]}>
          <Text>{this.props.aaa}</Text>
        </View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  backgroundColor: globalStyles.colors.primaryBlue
};

const progressBarStyle = StyleSheet.create({
  progressBar: {
    height: 5,
    width: 100 + "%",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  progressBarInner: {
    height: 5,
    backgroundColor: "#64dd17"
  }
});

export default ProgressBar;
