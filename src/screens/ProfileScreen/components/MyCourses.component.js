import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  ListItem
} from 'react-native-elements';

class MyCoursesComponent extends Component {
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

export default MyCoursesComponent;