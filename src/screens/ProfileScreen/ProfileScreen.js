import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  Avatar,
  ListItem
} from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';

class UserData extends Component {
  render() {
    const {nickname, avatar} = this.props
    return(
      <View style={userDataStyle.view}>
        <LinearGradient 
          colors={['#2089dc', '#68b9ff']}
          style={userDataStyle.linearGradient}
        >
          <View style={userDataStyle.avatarBackground}>
            <Avatar
              rounded
              size='xlarge'
              containerStyle={userDataStyle.avatar}
              source={{
                uri: avatar
            }} 
            />
          </View>
          <Text style={userDataStyle.username}>{nickname}</Text>
        </LinearGradient>
      </View>
    );
  }
}

const userDataStyle = StyleSheet.create({
  view: {
    flex: 1,
    borderBottomColor: 'rgb(200,200,200)',
  },
  linearGradient: {
    flex: 1,
    width: 100 + '%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarBackground: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#2089dc',
    borderRadius: 100,
    padding: 10,
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#fafafa',
    borderStyle: 'solid'
  },
  row: {
    flex: 1,
  },
  username: {
    fontSize: 26,
    paddingTop: 10,
    fontWeight: '500',
    color: '#fafafa',
  }
});

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
        <UserData 
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
