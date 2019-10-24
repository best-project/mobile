import React from "react";
import { createStackNavigator } from "react-navigation";
import CourseSplashScreen from "../src/screens/CourseSplashScreen/CourseSplashScreen";
import HomeScreen from "../src/screens/HomeScreen/HomeScreen";
import HeaderActionButtonComponent from "./common/components/HeaderActionButton.component";
import CourseManagerStackNavigation from "./CourseManagerStack.navigation";
import { headerStyle, headerTitleStyle } from "./common/config.style";

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerLeft: <HeaderActionButtonComponent onClick={navigation.openDrawer} type="drawer" />,
        headerStyle,
        headerTitleStyle
      };
    }
  },
  CourseSplash: {
    screen: CourseSplashScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: <HeaderActionButtonComponent onClick={() => navigation.goBack()} type="back" />,
        headerStyle,
        headerTitleStyle
      };
    }
  },
  CourseManager: {
    screen: CourseManagerStackNavigation,
    navigationOptions: () => {
      return {
        header: null,
        gesturesEnabled: false
      };
    }
  }
});

export default HomeStackNavigation;
