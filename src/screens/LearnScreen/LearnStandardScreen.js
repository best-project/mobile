import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import ProgressBar from "../../common/components/ProgressBar";
import LearnStandardAfterCourseComponent from "./components/LearnStandardAfterCourse.component";
import LearnStandardQuestionComponent from "./components/LearnStandardQuestion.component";
import LearnStandardNextButtonComponent from "./components/LearnStardardNextButton.component";
import { shuffleArray } from "../../common/services/helpers";

const LearnStandardScreen = props => {
  const [progressLevel, setProgressLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [course, setCourse] = useState();
  const [questionsList, setQuestionsList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const showEndScreen = progressLevel > 100;

  useEffect(() => {
    if (course) {
      setNewQuestionsList();
      setTotalAmount(course.data.length);
    } else {
      init();
    }
  }, [course]);

  function init() {
    const id = props.navigation.getParam("id");
    const { coursesList } = props.Courses;
    const _course = coursesList.find(item => item.id === id);
    setCourse(_course);
  }

  function nextButtonPress() {
    const progressLevel = Math.floor(((currentQuestion + 1) / (totalAmount - 1)) * 100);
    if (currentQuestion <= totalAmount) {
      setProgressLevel(progressLevel);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function setNewQuestionsList() {
    const questions = shuffleArray([...course.data]);
    setQuestionsList(questions);
  }

  function restart() {
    setNewQuestionsList();
    setProgressLevel(0);
    setCurrentQuestion(0);
  }

  function goTest() {
    console.log("go to test");
  }

  if (showEndScreen) {
    return <LearnStandardAfterCourseComponent onGoAgain={restart} onGoTest={goTest} name={course.name} />;
  }

  return (
    <View style={learnScreenStyles.view}>
      <View style={learnScreenStyles.view}>
        <ProgressBar progressLevel={progressLevel} />
        {!!questionsList.length && questionsList[0] && (
          <>
            <LearnStandardQuestionComponent data={questionsList[currentQuestion]} />
            <LearnStandardNextButtonComponent onPress={nextButtonPress} />
          </>
        )}
      </View>
    </View>
  );
};

LearnStandardScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("title", "Learn")
});

const learnScreenStyles = StyleSheet.create({
  view: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(
  mapStateToProps,
  {}
)(LearnStandardScreen);
