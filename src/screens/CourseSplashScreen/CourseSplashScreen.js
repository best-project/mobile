import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Rating, Button } from 'react-native-elements';

class Cover extends Component {
  render() {
    const {image, description} = this.props.course;
    return (
      <View style={coverStyle.view}>
        <ImageBackground source={{uri: image}} style={coverStyle.background}>
          <View style={coverStyle.textContainer}>
            <Text style={coverStyle.description}>{description}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const coverStyle = StyleSheet.create({
  view: {
    flex: 4,
    width: 100 + '%'
  },
  background: {
    width: 100 + '%',
    height: 100+ '%',
    opacity: 1,
    flex: 1,
    justifyContent: 'flex-end',
    borderBottomWidth: StyleSheet.hairlineWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.9
  },
  description: {
    textAlign: 'center',
    color: 'rgb(100,100,100)'
  }
});


class Statistics extends Component {
  render() {
    const {data, difficultyLevel, rate} = this.props.course;
    return(
      <View style={statisticsStyle.view}>
        <Row size={12}>
          <Col sm={4} >
            <Text style={statisticsStyle.propTitle}>Ilość słowek: </Text>
            <Text style={statisticsStyle.propValue}>{data.length}</Text>
          </Col>
          <Col sm={4} >
            <Text style={statisticsStyle.propTitle}>Poziom trudności: </Text>
            <Text style={statisticsStyle.propValue}>{difficultyLevel}</Text>
          </Col>
          <Col sm={4} >
            <Rating 
              imageSize={18}
              readonly
              startingValue={rate}
              style={statisticsStyle.rate}
            />
          </Col>
        </Row>
      </View>
    )
  }
}

const statisticsStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  propTitle: {
    textAlign: 'center',
    color: 'rgb(100,100,100)'
  },
  propValue: {
    textAlign: 'center'
  },
  rate: {
    paddingTop: 7
  }
});

class StartButton extends Component {

  render() {
    return(
      <View style={startBtnStyle.view}>
        <Button 
          title="Start now" 
          onPress={this.props.onClick()}
          buttonStyle={startBtnStyle.button}
        />
      </View>
    )
  }
}

const startBtnStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    marginLeft: 10,
    marginRight: 10
  }
})

class CourseSplashScreen extends Component {
  constructor(props) {
    super(props);

    this.startButtonClick = this.startButtonClick.bind(this);
  }
  
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });


  startButtonClick() {
    this.props.navigation.navigate('LearnStandard', {
      id: this.props.navigation.getParam('id')
    })
  }

  render() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {coursesList} = this.props.Courses;
    // const id = 13;
    const course = coursesList.find(item => item.id === id);
    return(
      <View style={splashStyle.view}>
        <Cover course={course} />
        <Statistics course={course} />
        <StartButton onClick={() => this.startButtonClick}/>
      </View>
    )
  }
}

const splashStyle = StyleSheet.create({
  view: {
    flex: 1,
  }
})

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(mapStateToProps, {})(CourseSplashScreen);