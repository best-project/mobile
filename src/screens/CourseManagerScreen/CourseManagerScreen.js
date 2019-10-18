import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text
} from 'react-native';


const CourseManagerScreen = (props) => {

  const id = 'TmiZYk3sDmzBV56MwQQO';
  const {coursesList} = props.Courses;
  const course = coursesList.find(item => item.id === id);
  return (
    <View style={courseManagerScreen.view}>
      {/* <ScreenHeader title="Course Name"/> */}
      <ImageBackground source={{uri: course.image}} style={courseManagerScreen.background}>
        <Text>Course Name</Text>
      </ImageBackground>
      <View style={courseManagerScreen.managePanelView}>

      </View>
    </View>
  )
}

const courseManagerScreen = StyleSheet.create({
  view: {
    flex: 1
  },
  background: {
    width: 100 + '%',
    height: 100+ '%',
    opacity: 1,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  managePanelView: {
    flex: 3,

  }

})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(CourseManagerScreen);