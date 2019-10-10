import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import CardComponent from '../../../common/components/Card.component';

const MyCoursesListComponent = (props) => {
  return (
    <View style={myCoursesStyle.view}>
      {/* <View style={myCoursesStyle.titleView}>
        <Text style={myCoursesStyle.titleText}>COURSES LIST</Text>
      </View> */}
      <CardComponent 
        id="kq8d2GyQZRci0qCzNI4s"
        title="Owoce i warzywa" 
        description="W tym kursie nauczysz się nazw owoców i warzyw."
        rate={4.8}

      />
    </View>
  )
}

const myCoursesStyle = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
  },
  titleView: {
    width: 100 + '%',
    height: 100,
    padding: 5,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,

  }
})

MyCoursesListComponent.displayName = 'MyCoursesListComponent';

export default MyCoursesListComponent;