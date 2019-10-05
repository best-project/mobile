import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import ScreenHeader from '../../common/ScreenHeader';
import ProgressBar from '../../common/ProgressBar'
import TestQuestionModule from './modules/TestQuestion.module';
import AnswersListModule from './modules/AnswersList.module';
import CourseCompletedModule from '../../modules/courses/CourseCompleted.module';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressLevel: 0,
      currentQuestion: 0, 
      validCount: 0,
      mistakesCount: 0,
      courseCompleted: false
    }
    this.course = this.props.Courses.coursesList[12];

    this._onAnswerPress = this._onAnswerPress.bind(this);
  }

  _onAnswerPress(valid) {
    const {currentQuestion} = this.state;
    if(valid) {
      this.setState({
        validCount: this.state.validCount + 1
      })
    } else {
      this.setState({
        mistakesCount: this.state.mistakesCount + 1
      })
    }
    const course = this.props.Courses.coursesList[12];
    const amountOfQuestions = course.data.length;
    const progressLevel = Math.floor((currentQuestion + 1)/(amountOfQuestions - 1) * 100);

    if(this.course.data.length !== currentQuestion + 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        progressLevel
      })
    } else {
      this.setState({
        courseCompleted: true
      })
    }
  }

  render() {
    const {progressLevel, currentQuestion, courseCompleted, mistakesCount} = this.state;
    const course = this.props.Courses.coursesList[12];

    if(courseCompleted) {
      return (
        <CourseCompletedModule 
          name={course.name}
          mistakes={mistakesCount}
        />
      )
    }
    return(
      <View style={testStyle.view}>
        <ScreenHeader title={course.name} />
        <View style={testStyle.view}>
          <ProgressBar
            progressLevel={progressLevel}
            backgroundColor="#2089dc"
          />
          <TestQuestionModule question={course.data[currentQuestion].word}/>
          <AnswersListModule
            data={course.data}
            currentQuestion={currentQuestion}
            _onAnswerPress={this._onAnswerPress}
          />
        </View>
      </View>
    );
  }
}
const testStyle = StyleSheet.create({
  view: {
    flex: 1,
  }, 
});


const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(mapStateToProps, {})(TestScreen);