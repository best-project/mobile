import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import ProgressBar from "../../common/components/ProgressBar";
import PuzzleTestQuestionModule from "./modules/PuzzleTestQuestion.module";
import PuzzleTestAnswersListModule from "./modules/PuzzleTestAnswer.module";
import CourseCompletedModule from "../../common/modules/CourseCompleted.module";
import { shuffleArray } from "../../common/services/helpers";

const PuzzleTestScreen = props => {
  const [progressLevel, setProgressLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [course, setCourse] = useState();
  const [questionsList, setQuestionsList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [points, setPoints] = useState(0);

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

  function setNewQuestionsList() {
    const questions = shuffleArray([...course.data]);
    setQuestionsList(questions);
  }

  function nextQuestion() {
    const progressLevel = Math.floor(((currentQuestion + 1) / (totalAmount - 1)) * 100);
    if (currentQuestion <= totalAmount) {
      setProgressLevel(progressLevel);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function addPoints(addPoints) {
    setPoints(points + addPoints);
  }

  if (showEndScreen) {
    return <CourseCompletedModule name={course.name} points={points} maxPoints={course.maxPoints} id={props.navigation.getParam("id")} />;
  }

  return (
    <View style={puzzleTestStyle.view}>
      <ProgressBar progressLevel={progressLevel} />
      {!!questionsList.length && questionsList[0] && (
        <>
          <PuzzleTestQuestionModule question={questionsList[currentQuestion].translate} />
          <PuzzleTestAnswersListModule
            validAnswer={questionsList[currentQuestion].word}
            currentQuestion={currentQuestion}
            onValidAnswer={nextQuestion}
            addPoints={addPoints}
          />
        </>
      )}
    </View>
  );
};

PuzzleTestScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("title", "Test")
});

const puzzleTestStyle = StyleSheet.create({
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
)(PuzzleTestScreen);
