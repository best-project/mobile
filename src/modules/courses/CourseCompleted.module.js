import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import { AirbnbRating } from 'react-native-elements';

import congrats from '../../../assets/icons/congratulations.png';
import ConfettiComponent from '../../components/common/Confetti.component';

const reviews = ["Terrible", "Bad", "OK", "Good", "Very Good", "Wow", "Amazing", "Unbelievable"];

class CourseCompletedModule extends Component {
  render() {
    const {mistakes, name} = this.props;

    return (
      <View style={courseEndedModuleStyle.view}>
        <ConfettiComponent />
        <View style={courseEndedModuleStyle.congratulationsImageView}>
          <Image 
            style={courseEndedModuleStyle.image}
            source={congrats}
          />
        </View>
        <View style={courseEndedModuleStyle.congratulationsHeaderView}>
          <Text style={courseEndedModuleStyle.headerText}>
            Congratulations!
          </Text>
          <Text style={courseEndedModuleStyle.subHeaderText}>
            You have completed test {name}
          </Text>
        </View>
        <View style={courseEndedModuleStyle.statisticsView}>
          <AirbnbRating
            count={8}
            reviews={reviews}
            defaultRating={8  - mistakes}
            size={20}
          />
      </View>
      </View>
    )
  }
}

const courseEndedModuleStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  congratulationsImageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 150
  },
  congratulationsHeaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
  },
  subHeaderText: {
    fontSize: 14,
    paddingVertical: 5
  },
  statisticsView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statisticsViewInner: {
    flex: 1,
    textAlign: 'center'
  }
});

export default CourseCompletedModule;