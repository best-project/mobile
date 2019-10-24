import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Column as Col, Row } from "react-native-flexbox-grid";
import { Rating } from "react-native-elements";

class CourseSplashStatisticsComponent extends Component {
  render() {
    const { data, difficultyLevel, rate } = this.props.course;
    return (
      <View style={statisticsStyle.view}>
        <Row size={12}>
          <Col sm={4}>
            <Text style={statisticsStyle.propTitle}>Number of words: </Text>
            <Text style={statisticsStyle.propValue}>{data.length}</Text>
          </Col>
          <Col sm={4}>
            <Text style={statisticsStyle.propTitle}>Difficulty: </Text>
            <Text style={statisticsStyle.propValue}>{difficultyLevel}</Text>
          </Col>
          <Col sm={4}>
            <Rating imageSize={18} readonly startingValue={rate} style={statisticsStyle.rate} />
          </Col>
        </Row>
      </View>
    );
  }
}

const statisticsStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  propTitle: {
    textAlign: "center",
    color: "rgb(100,100,100)"
  },
  propValue: {
    textAlign: "center"
  },
  rate: {
    paddingTop: 7
  }
});

export default CourseSplashStatisticsComponent;
