import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import UserDataComponent from './components/UserData.component';
import UserStatisticsComponent from './components/UserStatistics.component';

class Profile extends Component {
  render() {
    const {nickname, avatar, points, level} = this.props.Profile;
    const {coursesList} = this.props.Courses;
    const {navigation} = this.props;
    return (
      <View style={profileStyle.view}>
        <UserDataComponent 
          nickname={nickname}
          avatar={avatar}
        />
        <UserStatisticsComponent 
          points={points}
          level={level}
        />
      </View>
    );
  }
}

const profileStyle = StyleSheet.create({
  view: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  Profile: state.Profile,
  Courses: state.Courses
});

export default connect(mapStateToProps, {
  
})(Profile);
