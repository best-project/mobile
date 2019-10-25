import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import ProgressBar from "../../common/components/ProgressBar";
import TestQuestionModule from "./modules/TestQuestion.module";
import AnswersListModule from "./modules/AnswersList.module";
import CourseCompletedModule from "../../common/modules/CourseCompleted.module";
import { shuffleArray } from "../../common/services/helpers";

const StandardTestScreen = props => {
  const [progressLevel, setProgressLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [course, setCourse] = useState();
  const [questionsList, setQuestionsList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [points, setPoints] = useState(0);

  const showEndScreen = progressLevel > 100;

  useEffect(() => {
    console.log(points);
  }, [points]);

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

  function setNewQuestionsList() {
    const questions = shuffleArray([...course.data]);
    setQuestionsList(questions);
  }

  function onAnswerPress() {
    const progressLevel = Math.floor(
      ((currentQuestion + 1) / (totalAmount - 1)) * 100
    );

    if (currentQuestion <= totalAmount) {
      setProgressLevel(progressLevel);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function addPoints(addPoints) {
    setPoints(points + addPoints);
  }

  if (!course) {
    return null;
  }

  if (showEndScreen) {
    return (
      <CourseCompletedModule
        name={course.name}
        points={points}
        maxPoints={course.maxPoints}
        id={props.navigation.getParam("id")}
      />
    );
  }

  return (
    <View style={testStyle.view}>
      <ProgressBar progressLevel={progressLevel} />
      {!!questionsList.length && questionsList[0] && (
        <>
          <TestQuestionModule question={questionsList[currentQuestion].word} />
          <AnswersListModule
            data={questionsList}
            currentQuestion={currentQuestion}
            onAnswerPress={onAnswerPress}
            addPoints={addPoints}
          />
        </>
      )}
    </View>
  );
};

StandardTestScreen.navigationOptions = ({ navigation }) => ({
  title: `Test ${navigation.getParam("title")}`
});

const testStyle = StyleSheet.create({
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
)(StandardTestScreen);
