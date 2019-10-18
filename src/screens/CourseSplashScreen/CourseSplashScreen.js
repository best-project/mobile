import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import CourseSplashCoverComponent from './components/CourseSplashCover.component';
import CourseSplashStatisticsComponent from './components/CourseSplashStatistics.component';
import CourseSplashStartButtonComponent from './components/CourseSplashStartButton.component';


class CourseSplashScreen extends Component {
  constructor(props) {
    super(props);

    this.startButtonClick = this.startButtonClick.bind(this);
  }
  
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });


  startButtonClick() {
    this.props.navigation.navigate('LearnStandard', {
      id: this.props.navigation.getParam('id'),
      title: this.props.navigation.getParam('title')
    })
  }

  render() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {coursesList} = this.props.Courses;
    const course = coursesList.find(item => item.id === id);
    return(
      <View style={splashStyle.view}>
        <CourseSplashCoverComponent course={course} />
        <CourseSplashStatisticsComponent course={course} />
        <CourseSplashStartButtonComponent onClick={this.startButtonClick}/>
      </View>
    )
  }
}


const splashStyle = StyleSheet.create({
  view: {
    flex: 1,
  }
})

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(mapStateToProps, {})(CourseSplashScreen);