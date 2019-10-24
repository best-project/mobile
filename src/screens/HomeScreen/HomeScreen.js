import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import MyCoursesListComponent from "./components/MyCoursesList.component";

const HomeScreen = props => {
  const { coursesList } = props.Courses;
  console.log(coursesList.length);
  return (
    <View style={homeStyle.view}>
      <MyCoursesListComponent coursesList={coursesList} navigation={props.navigation} />
    </View>
  );
};

const homeStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  }
});

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(
  mapStateToProps,
  {}
)(HomeScreen);
