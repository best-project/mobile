import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import globalStyles from "../../common/style/global.style";
import CourseManagerActionIconButtonComponent from "./components/CourseManagerActionButton.component";
import { userInitCourse } from "../../actions/ProfileActions";

const CourseManagerScreen = props => {
  const [course, setCourse] = useState();
  const [userCourse, setUserCourse] = useState();
  useEffect(() => {
    init();
  }, [course]);

  function init() {
    const id = props.navigation.getParam("id");
    const { coursesList } = props.Courses;
    const _course = coursesList.find(item => item.id === id);
    const { profileCourses } = props.Profile;
    const _userCourse = profileCourses.find(item => item.id === id);

    if (_userCourse) {
      setUserCourse(_userCourse);
    } else {
      props.userInitCourse(id);
    }
    setCourse(_course);
  }

  function goLearn() {
    const routeParams = {
      id: props.navigation.getParam("id"),
      title: props.navigation.getParam("title")
    };

    props.navigation.navigate("StandardLearn", routeParams);
  }

  function goTest() {
    const routeParams = {
      id: props.navigation.getParam("id"),
      title: props.navigation.getParam("title")
    };

    if (course.type === "puzzle") {
      props.navigation.navigate("PuzzleTest", routeParams);
    }

    if (course.type === "standard") {
      props.navigation.navigate("StandardTest", routeParams);
    }
  }

  return (
    <View style={courseManagerStyle.view}>
      {!!course && userCourse && (
        <>
          <ImageBackground
            source={{ uri: course.image }}
            style={courseManagerStyle.background}
          >
            <View style={courseManagerStyle.userCourseStatisticsView}>
              <View style={courseManagerStyle.bestPointsView}>
                <AnimatedCircularProgress
                  size={100}
                  width={10}
                  fill={(userCourse.points / course.maxPoints) * 100}
                  tintColor={globalStyles.colors.secondaryBlue}
                  backgroundColor={globalStyles.colors.darkBlue}
                  arcSweepAngle={180}
                  rotation={-90}
                >
                  {() => (
                    <Text style={courseManagerStyle.bestPointsText}>
                      {userCourse.points}
                    </Text>
                  )}
                </AnimatedCircularProgress>
                <Text style={courseManagerStyle.bestPointsTitleText}>
                  Best Points
                </Text>
              </View>
              <View style={courseManagerStyle.bestPointsView}>
                <Text style={courseManagerStyle.statisticText}>
                  {"Passed: " + userCourse.passed}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={courseManagerStyle.managePanelView}>
            <CourseManagerActionIconButtonComponent
              icon="leanpub"
              title="Learn"
              onClick={goLearn}
            />
            <CourseManagerActionIconButtonComponent
              icon="edit"
              title="Test"
              onClick={goTest}
            />
            <CourseManagerActionIconButtonComponent
              icon="leanpub"
              title="Arcade"
            />
          </View>
        </>
      )}
    </View>
  );
};

CourseManagerScreen.navigationOptions = ({ navigation }) => ({
  title: `Course ${navigation.getParam("title")}`
});

const courseManagerStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  background: {
    width: 100 + "%",
    height: 100 + "%",
    opacity: 1,
    flex: 5,
    justifyContent: "flex-end",
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  userCourseStatisticsView: {
    flex: 1 / 3,
    flexDirection: "row",
    width: 100 + "%",
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  userCourseStatisticsText: {
    fontSize: 20
  },
  managePanelView: {
    flex: 1,
    flexDirection: "row"
  },
  portletView: {
    width: 100 + "%",
    borderColor: globalStyles.colors.primaryBlue,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    alignContent: "center"
  },
  portletText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    color: globalStyles.colors.darkBlue
  },
  bestPointsView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bestPointsText: {
    fontSize: 16
  },
  bestPointsTitleText: {
    fontSize: 20,
    marginTop: -30
  },
  statisticText: {}
});

const mapStateToProps = state => ({
  Courses: state.Courses,
  Profile: state.Profile
});

export default connect(
  mapStateToProps,
  { userInitCourse }
)(CourseManagerScreen);
