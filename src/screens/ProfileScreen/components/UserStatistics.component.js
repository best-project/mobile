import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SeparatorComponent from "../../../common/components/Separator.Component";
import globalStyles from "../../../common/style/global.style";

const UserStatisticsComponent = props => {
  return (
    <View style={userStatisticsStyle.view}>
      <SeparatorComponent color="#68b9ff" />
      <Text style={userStatisticsStyle.titleText}>Statistics</Text>
      <View style={userStatisticsStyle.statisticsView}>
        <View style={userStatisticsStyle.circleView}>
          <View style={userStatisticsStyle.circleWrapperView}>
            <View style={userStatisticsStyle.circleInnerView}>
              <Text style={userStatisticsStyle.circleText}>{props.points}</Text>
            </View>
          </View>
          <Text style={userStatisticsStyle.subcircleText}>Points</Text>
        </View>
        <View style={userStatisticsStyle.circleView}>
          <View style={userStatisticsStyle.circleWrapperView}>
            <View style={userStatisticsStyle.circleInnerView}>
              <Text style={userStatisticsStyle.circleText}>{props.level}</Text>
            </View>
          </View>
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
  titleText: {
    fontSize: 20,
    color: globalStyles.colors.secondaryBlue,
    textTransform: "uppercase",
    alignSelf: "center"
  },
  circleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circleWrapperView: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: globalStyles.colors.secondaryBlue,
    borderRadius: 100,
    padding: 2
  },
  circleInnerView: {
    backgroundColor: globalStyles.colors.secondaryBlue,
    borderRadius: 1000,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    color: "#fafafa",
    fontSize: 24
  },
  subcircleText: {
    fontSize: 20,
    color: globalStyles.colors.secondaryBlue,
    paddingTop: 5
  }
});

export default UserStatisticsComponent;
