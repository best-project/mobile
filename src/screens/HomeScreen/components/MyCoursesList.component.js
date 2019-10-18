import React from 'react';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import CardComponent from '../../../common/components/Card.component';

const MyCoursesListComponent = (props) => {
  return (
    <ScrollView style={myCoursesStyle.view} contentContainerStyle={myCoursesStyle.contentContainer}>
      {props.coursesList.length && props.coursesList.map(course => (
        
        <CardComponent key={course.id}
          id={course.id}
          title={course.name}
          description={course.description}
          rate={course.rate}
          image={course.image}
          onClick={() => {
            props.navigation.navigate('CourseSplash', {
              id: course.id,
              title: course.name
            })
          }}
        />
      ))}
    </ScrollView>
  )
}

const myCoursesStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  contentContainer: {
    padding: 10,
  }
})

MyCoursesListComponent.displayName = 'MyCoursesListComponent';

export default MyCoursesListComponent;