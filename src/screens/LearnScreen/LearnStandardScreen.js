import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import ScreenHeader from '../../common/components/ScreenHeader';
import ProgressBar from '../../common/components/ProgressBar';
import LearnStandardAfterCourseComponent from './components/LearnStandardAfterCourse.component';
import LearnStandardQuestionComponent from './components/LearnStandardQuestion.component';
import LearnStandardNextButtonComponent from './components/LearnStardardNextButton.component';


const LearnStandardScreen = (props) => {
  const [progressLevel, setProgressLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const id =  props.navigation.getParam('id');
    const {coursesList} = props.Courses;
    const course = coursesList.find(item => item.id === id);
    if(course) {
      setTotalAmount(course.data.length);
    }
  }, [])

  function nextButtonPress () {
    const progressLevel = Math.floor((currentQuestion + 1)/(totalAmount - 1) * 100);
    if(currentQuestion <= totalAmount) {
      setProgressLevel(progressLevel);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function restart() {
    setProgressLevel(0)
    setCurrentQuestion(0)
  }

  function goToTest() {
    console.log('go to test')
  }

  const id = props.navigation.getParam('id');
  const {coursesList} = props.Courses;
  const course = coursesList.find(item => item.id === id);

  return (
    <View style={learnScreenStyles.view}>
      {progressLevel <= 100 ? 
      <View style={learnScreenStyles.view}>
        <ProgressBar 
          progressLevel={progressLevel}
          backgroundColor="#2089dc"
        />
        <LearnStandardQuestionComponent data={course.data[currentQuestion]} />
        <LearnStandardNextButtonComponent onPress={nextButtonPress} />
      </View>
      : <LearnStandardAfterCourseComponent
          onGoAgain={restart}
          onGoTest={goToTest}
          name={course.name}
        />
      }
    </View>
  )
}

LearnStandardScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title', 'Kurs')
})

const learnScreenStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(LearnStandardScreen);