import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const LearnStandardAfterCourseComponent = props => {
  return (
    <View style={afterCourseStyle.view}>
      <Text style={afterCourseStyle.headerText}>Course</Text>
      <Text style={afterCourseStyle.titleText}>{props.name}</Text>
      <Text style={afterCourseStyle.bottomText}>came to the end.</Text>
      <View style={afterCourseStyle.buttons}>
        <Button
          title="Again"
          containerStyle={afterCourseStyle.button}
          onPress={props.goAgain}
        />
        <Button
          title="Go to test"
          containerStyle={afterCourseStyle.button}
          onPress={props.goTest}
        />
        <Button
          title="Back to manager"
          containerStyle={afterCourseStyle.button}
          onPress={props.backToManager}
        />
      </View>
    </View>
  );
};

const afterCourseStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa"
  },
  buttons: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between"
  },
  button: {
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 30
  },
  titleText: {
    fontSize: 40
  },
  bottomText: {
    fontSize: 18
  }
});

export default LearnStandardAfterCourseComponent;
