import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import SeparatorComponent from '../../../common/Separator.Component';

const UserStatisticsComponent = (props) => {
  return (
    <View style={userStatisticsStyle.view}>
      <SeparatorComponent />
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
    
  )
}

const userStatisticsStyle = StyleSheet.create({
  view: {
    flex: 2,
    backgroundColor: '#68b9ff'
  },
  statisticsView: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    alignSelf: 'center'
  },
  circleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleWrapperView: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100,
    padding: 2,
  },
  circleInnerView: {
    backgroundColor: '#fff',
    borderRadius: 1000,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleText: {
    color: '#68b9ff',
    fontSize: 24
  },
  subcircleText: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 5,
  }
})


export default UserStatisticsComponent;