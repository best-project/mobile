import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet
} from 'react-native';

import ScreenHeader from '../../common/components/ScreenHeader';
import ProgressBar from '../../common/components/ProgressBar';
import PuzzleTestQuestionModule from './modules/PuzzleTestQuestion.module';
import PuzzleTestAnswersListModule from './modules/PuzzleTestAnswer.module';
import CourseCompletedModule from '../../common/modules/CourseCompleted.module';

class PuzzleTestScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressLevel: 0,
      currentQuestion: 0,
      validCount: 0,
      courseCompleted: true,
      mistakesCount: 2
    }
    this.course = this.props.Courses.coursesList[2];

    this._increaseQuestionIndex = this._increaseQuestionIndex.bind(this);
  }

  _increaseQuestionIndex() {
    const {currentQuestion} = this.state;
    const amountOfQuestions = this.course.data.length;
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
    const course = this.props.Courses.coursesList[2]

    const {progressLevel, currentQuestion, courseCompleted, mistakesCount} = this.state;
    if(courseCompleted) {
      return (
        <CourseCompletedModule
          mistakes={mistakesCount}
          name={course.name}
        /> 
      )
    }

    return (
      <View style={puzzleTestStyle.view}>
        <ScreenHeader title={course.name} />
        <ProgressBar
          progressLevel={progressLevel}
          backgroundColor="#2089dc"
        />
        <PuzzleTestQuestionModule 
          question={course.data[currentQuestion].translate}
        />
        <PuzzleTestAnswersListModule
          validAnswer={course.data[currentQuestion].word}
          currentQuestion={currentQuestion}
          onValidAnswer={this._increaseQuestionIndex}
        />
      </View>
    );
  }
}

const puzzleTestStyle = StyleSheet.create({
  view:{
    flex: 1,
  }
});

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(mapStateToProps, {})(PuzzleTestScreen);