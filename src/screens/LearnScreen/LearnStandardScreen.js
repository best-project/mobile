import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

import {Button} from 'react-native-elements';

import ScreenHeader from '../../common/ScreenHeader';
import Speaker from '../../common/Speaker';
import ProgressBar from '../../common/ProgressBar';

class Question extends Component {
  render() {
    const {data} = this.props;
    return (
      <View style={questionStyle.view}>
        <View style={questionStyle.imageView}>
          <ImageBackground 
            source={{uri: data.image}}
            style={questionStyle.imageBackground}
            imageStyle={questionStyle.imageStyle}
          >
            <View style={[questionStyle.boxView, questionStyle.question]}>
              <Speaker toSpeech={data.word} />
              <Text style={questionStyle.text}>
                {data.word}
              </Text>
            </View>
            <View style={[questionStyle.boxView, questionStyle.translate]}>
              <Text style={questionStyle.text}>
                {data.translate}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const questionStyle = StyleSheet.create({
  view: {
    flex: 4,
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center'
  },
  imageView: {
    flex: 1,
    width: 95 + '%',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2089dc',
  },
  imageBackground: {
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5
  }, 
  boxView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  question: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#343434',
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  translate: {
    backgroundColor: 'rgba(255,255,255, 0.95)',
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5
  },
  text: {
    fontSize: 24,
    color: '#000'
  }

})

class NextButton extends Component {
  render() {
    return (
      <View style={nextBtnStyle.view}>
        <Button title="Next" containerStyle={nextBtnStyle.btn} onPress={() => this.props.onPress()}/>
      </View>
    )
  }
}

const nextBtnStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 50 + '%'
  }
})

class AfterCourse extends Component {
  render() {
    const {name} = this.props;
    return(
      <View style={afterCourseStyle.view}>
        <Text style={afterCourseStyle.headerText}>Course</Text>
        <Text style={afterCourseStyle.titleText}>{name}</Text>
        <Text style={afterCourseStyle.bottomText}>came to the end.</Text>
        <View style={afterCourseStyle.buttons}>
          <Button 
            title="Go again"
            containerStyle={afterCourseStyle.button}
            onPress={() => this.props.onGoAgain()}
          />
          <Button
            title="Go to test"
            containerStyle={afterCourseStyle.button}
            onPress={() => this.props.onGoTest()}
          />
        </View>
        
      </View>
    )
  }
}

const afterCourseStyle = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fafafa"
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around'
  },
  button: {
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30
  },
  titleText: {
    fontSize: 40
  },
  bottomText: {
    fontSize: 18
  }
})

class LearnStandardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressLevel: 0,
      currentQuestion: 0,
      questionsAmount: 0,
    }
    this._nextButtonPress = this._nextButtonPress.bind(this);
    this._onGoAgain = this._onGoAgain.bind(this);
  }

  componentDidMount() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {coursesList} = this.props.Courses;

    const course = coursesList.find(item => item.id === id);
    if(course) {
      this.setState({
        questionsAmount: course.data.length
      })
    }
  }

  _nextButtonPress () {
    const {currentQuestion, questionsAmount} = this.state;
    const progressLevel = Math.floor((currentQuestion + 1)/(questionsAmount - 1) * 100);
    if(currentQuestion <= questionsAmount) {
      this.setState({
        progressLevel,
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }
  _onGoAgain() {
    this.setState({
      progressLevel: 0,
      currentQuestion: 0
    })
  }
  _onGoTest() {
    console.log('test')
  }

  render() {
    const {progressLevel, currentQuestion} = this.state;
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {coursesList} = this.props.Courses;

    const course = coursesList.find(item => item.id === id);
   
    return(
      <View style={learnStyles.view}>
        <ScreenHeader title={course.name} />
        {progressLevel <= 100 ? 
        <View style={learnStyles.view}>
          <ProgressBar 
            progressLevel={progressLevel}
            backgroundColor="#2089dc"
          />
          <Question data={course.data[currentQuestion]} />
          <NextButton onPress={this._nextButtonPress}/>
        </View>
        : <AfterCourse
            onGoAgain={this._onGoAgain}
            onGoTest={this._onGoTest}
            name={course.name}
          />
        }
      </View>
    )
  }
}

const learnStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  Courses: state.Courses
})

export default connect(mapStateToProps, {})(LearnStandardScreen);