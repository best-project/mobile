import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import { Button, Icon } from 'react-native-elements';


const CourseManagerScreen = (props) => {

  const id = 'TmiZYk3sDmzBV56MwQQO';
  const {coursesList} = props.Courses;
  const course = coursesList.find(item => item.id === id);
  return (
    <View style={courseManagerStyle.view}>
      {/* <ScreenHeader title="Course Name"/> */}
      <ImageBackground source={{uri: course.image}} style={courseManagerStyle.background}>
        <View style={courseManagerStyle.userCourseStatisticsView}>
          <Text style={courseManagerStyle.userCourseStatisticsText}>Course Name</Text>
        </View>
      </ImageBackground>
      <View style={courseManagerStyle.managePanelView}>
        <TouchableOpacity style={courseManagerStyle.portletView} activeOpacity={0.7}>
          <Icon name="leanpub" type="font-awesome" size={30} color="#3b3b3b"/>
          <Text style={courseManagerStyle.portletText}>Lesson</Text>
        </TouchableOpacity>
        <TouchableOpacity style={courseManagerStyle.portletView}>
          <Icon name="edit" type="font-awesome" size={30} color="#3b3b3b"/>
          <Text style={courseManagerStyle.portletText}>Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={courseManagerStyle.portletView}>
          <Icon name="leanpub" type="font-awesome" size={30} color="#3b3b3b" />
          <Text style={courseManagerStyle.portletText}>Arcade</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const courseManagerStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  background: {
    width: 100 + '%',
    height: 100+ '%',
    opacity: 1,
    flex: 1,
    justifyContent: 'flex-end',
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
  userCourseStatisticsView: {
    flex: 1/3,
    width: 100 + '%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userCourseStatisticsText: {
    fontSize: 20,
  },
  managePanelView: {
    flex: 1/6,
    flexDirection: 'row',
  },
  portletView: {
    flex: 1/3,
    borderColor: '#2089dc',
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderRadius: 3,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  portletText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#3b3b3b',
  }

})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(CourseManagerScreen);