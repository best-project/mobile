import React from "react";
import { View, StyleSheet, Text } from "react-native";
import globalStyles from "../../../common/style/global.style";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const UserStatisticsComponent = props => {
  return (
    <View style={userStatisticsStyle.view}>
      <View style={userStatisticsStyle.statisticsView}>
        <View style={userStatisticsStyle.circleView}>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={10}
            tintColor={globalStyles.colors.secondaryBlue}
            backgroundColor={globalStyles.colors.darkBlue}
            rotation={0}
          >
            {() => <Text>{props.points}</Text>}
          </AnimatedCircularProgress>
          <Text style={userStatisticsStyle.subcircleText}>Points</Text>
        </View>
        <View style={userStatisticsStyle.circleView}>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={10}
            tintColor={globalStyles.colors.secondaryBlue}
            backgroundColor={globalStyles.colors.darkBlue}
            rotation={0}
          >
            {() => <Text>{props.level}</Text>}
          </AnimatedCircularProgress>
          <Text style={userStatisticsStyle.subcircleText}>Level</Text>
        </View>
      </View>
    </View>
  );
};

const userStatisticsStyle = StyleSheet.create({
  view: {
    flex: 2,
    backgroundColor: "#fafafa"
  },
  statisticsView: {
    flex: 1,
    flexDirection: "row"
  },
  circleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    color: "#fafafa",
    fontSize: 24
  },
  subcircleText: {
    fontSize: 20,
    color: globalStyles.colors.darkBlue,
    paddingTop: 5
  }
});

export default UserStatisticsComponent;
