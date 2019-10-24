import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Image } from "react-native";
import { Rating } from "react-native-elements";
import congrats from "../icons/congratulations.png";
import ConfettiComponent from "../components/Confetti.component";
import { userSetBestResult } from "../../actions/ProfileActions";

const CourseCompletedModule = props => {
  useEffect(() => {
    props.userSetBestResult(props.id, props.points);
  }, []);

  return (
    <View style={courseEndedModuleStyle.view}>
      <ConfettiComponent />
      <View style={courseEndedModuleStyle.congratulationsImageView}>
        <Image style={courseEndedModuleStyle.image} source={congrats} />
      </View>
      <View style={courseEndedModuleStyle.congratulationsHeaderView}>
        <Text style={courseEndedModuleStyle.headerText}>Congratulations!</Text>
        <Text style={courseEndedModuleStyle.subHeaderText}>You have completed test {props.name}</Text>
      </View>
      <View style={courseEndedModuleStyle.statisticsView}>
        <Text>{`${props.points}/${props.maxPoints} points earned`}</Text>
        <Rating type="star" ratingCount={5} startingValue={(props.points / props.maxPoints) * 5} imageSize={30} readonly />
      </View>
    </View>
  );
};

const courseEndedModuleStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  congratulationsImageView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 300,
    height: 150
  },
  congratulationsHeaderView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10
  },
  subHeaderText: {
    fontSize: 14,
    paddingVertical: 5
  },
  statisticsView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  statisticsViewInner: {
    flex: 1,
    textAlign: "center"
  }
});

const mapStateToProps = state => ({
  Profile: state.Profile
});

export default connect(mapStateToProps,
{ userSetBestResult })(CourseCompletedModule);
