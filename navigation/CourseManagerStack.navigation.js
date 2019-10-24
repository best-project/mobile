import React from "react";
import { createStackNavigator } from "react-navigation";
import HeaderActionButtonComponent from "./common/components/HeaderActionButton.component";
import { headerStyle, headerTitleStyle } from "./common/config.style";
import LearnStandardScreen from "../src/screens/LearnScreen/LearnStandardScreen";
import CourseManagerScreen from "../src/screens/CourseManagerScreen/CourseManagerScreen";
import StandardTestScreen from "../src/screens/StandardTestScreen/StandardTestScreen";
import PuzzleTestScreen from "../src/screens/PuzzleTestScreen/PuzzleTestScreen";

const CourseManagerStackNavigation = createStackNavigator({
  CourseManager: {
    screen: CourseManagerScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <HeaderActionButtonComponent
            onClick={() => {
              navigation.navigate("Home");
            }}
            type="home"
            title={navigation.state.params.title}
          />
        ),
        headerStyle,
        headerTitleStyle
      };
    }
  },
  LearnStandard: {
    screen: LearnStandardScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <HeaderActionButtonComponent
            onClick={() => {
              navigation.goBack();
            }}
            type="back"
          />
        ),
        headerStyle,
        headerTitleStyle
      };
    }
  },
  StandardTest: {
    screen: StandardTestScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <HeaderActionButtonComponent
            onClick={() => {
              navigation.goBack();
            }}
            type="back"
          />
        ),
        headerStyle,
        headerTitleStyle
      };
    }
  },
  PuzzleTest: {
    screen: PuzzleTestScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <HeaderActionButtonComponent
            onClick={() => {
              navigation.goBack();
            }}
            type="back"
          />
        ),
        headerStyle,
        headerTitleStyle
      };
    }
  }
});

export default CourseManagerStackNavigation;
