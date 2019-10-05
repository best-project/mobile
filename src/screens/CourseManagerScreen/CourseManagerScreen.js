import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native'
import PortletComponent from './components/Portlet.component';
import ScreenHeader from '../../common/ScreenHeader';


const CourseManagerScreen = (props) => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(Dimensions.get('window').height)
  }, [])

  return (
    <View style={courseManagerScreen.view}>
      <ScreenHeader title="Course Name"/>
      <PortletComponent>
        <Text>Text</Text>
      </PortletComponent>
      <PortletComponent>
        <Text>Text</Text>
      </PortletComponent>
    </View>
  )
}

const courseManagerScreen = StyleSheet.create({
  view: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(CourseManagerScreen);