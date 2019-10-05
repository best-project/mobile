import React, { Component } from 'react';

import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MyCoursesComponent from '../ProfileScreen/components/MyCourses.component';

class HomeScreen extends Component {
  render() {
    const {coursesList} = this.props.Courses;
    return (
      <View style={homeStyle.view}>
        <MyCoursesComponent coursesList={coursesList} />
      </View>
    )
  }
}

const homeStyle = StyleSheet.create({
  view: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(HomeScreen);