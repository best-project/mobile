import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  ListItem
} from 'react-native-elements';

import UserDataComponent from './components/UserData.component';

class MyCourses extends Component {
  keyExtractor(item, index) {
    return index.toString();
  }
  renderItem = ({item}) => ( 
    <ListItem
      title={item.name}
      containerStyle={item.active ? myCoursesStyle.active : myCoursesStyle.inactive}
      topDivider={true}
      onPress={() => {
        this.props.navigation.navigate('CourseSplash', {
        id: item.id,
        title: item.name
      })}
      }
    />
  )
  render() {
    const {coursesList} = this.props;
    return(
      <View style={myCoursesStyle.view}>
        <View style={myCoursesStyle.titleView}>
          <Text style={myCoursesStyle.text}>MY COURSES LIST</Text>
        </View>
        <View style={myCoursesStyle.flatlistView}>
          <FlatList 
            keyExtractor={this.keyExtractor}
            data={coursesList.sort((a, b) => {
              return a.active < b.active
            })}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const myCoursesStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68b9ff',
  },
  flatlistView: {
    flex: 7
  },
  text: {
    fontSize: 18,
    color: '#fff'
  },
  active: {
    opacity: 1 
  },
  inactive: {
    opacity: 0.5,
    backgroundColor: 'rgb(245,245,245)'
  }
});

class Profile extends Component {
  render() {
    const {nickname, avatar} = this.props.Profile;
    const {coursesList} = this.props.Courses;
    const {navigation} = this.props;
    return (
      <View style={profileStyle.view}>
        <UserDataComponent 
          nickname={nickname}
          avatar={avatar}
        />
        <MyCourses
          coursesList={coursesList}
          navigation={navigation}
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
