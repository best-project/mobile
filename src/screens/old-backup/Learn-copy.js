import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground
} from 'react-native';


import {Column as Col, Row} from 'react-native-flexbox-grid';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, Header, ListItem, Rating, Button, Icon } from 'react-native-elements';

import * as Speech from 'expo-speech';

import ScreenHeader from '../components/ScreenHeader';

const exampleTest = {
  id: 1,
  name: 'Kultura - Angielski',
  description: 'Słowo kultura ma wiele znaczeń. Interpretuje się ją w różny sposób przez przedstawicieli wielu dziedzin. Kulturę można określić jako ogół wytworów ludzi, zarówno fizycznych, materialnych, jak i duchowych, symbolicznych.',
  image: 'https://culture360.asef.org/media/2018/5/european_commission_shutterstock_584963080.jpg',
  language: 'en',
  inProgress: false,
  difficultyLevel: 'normal', //easy, normal, medium, hard
  rate: 4.5,
  data: [
    {
      word: 'aisle',
      translate: 'przejście, nawa boczna'
    },
    {
      word: 'art',
      translate: 'sztuka'
    },
    {
      word: 'artist',
      translate: 'artysta'
    },
    {
      word: 'artistic',
      translate: 'artystyczny'
    },
    {
      word: 'band',
      translate: 'zespół, kapela'
    },
    {
      word: 'brush',
      translate: 'szczotka'
    },
    {
      word: 'camera',
      translate: 'kamera, aparat fotograficzny'
    }
  ]
}


class ProgressBar extends Component {
  render() {
    const {progressLevel} = this.props;
    console.log(this.props)
    return (
      <View style={progressBarStyle.progressBar}>
        <View style={[progressBarStyle.progressBarInner,{width: progressLevel + '%'}]}>
        </View>
      </View>
    )
  }
}

const progressBarStyle = StyleSheet.create({
  progressBar: {
    height: 5,
    width: 100 + '%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200,200,200)'
    
  },
  progressBarInner: {
    height: 5,
    backgroundColor: '#64dd17'
  }
})

class Question extends Component {
  voicePress(value) {
    Speech.speak(value, {
      language: 'en',
      pitch: 1,
      rate: 1
    });
  }

  componentDidMount() {
    this.voicePress(this.props.data.word);
  }

  componentDidUpdate() {
    this.voicePress(this.props.data.word);
  }

  _speakerPress() {
    this.voicePress(this.props.data.word);
  }
  render() {
    const {data} = this.props;
    return (
      <View style={questionStyle.view}>
        
        <View style={questionStyle.boxView}> 
          <View style={questionStyle.innerBox}>
            <Icon 
              name="volume-up"
              type="font-awesome"
              color="#1b1b1b"
              size={30}
              containerStyle={questionStyle.speaker}
              onPress={() => this._speakerPress()}
            />
            <Text style={questionStyle.innerText}>
              {data.word}
            </Text>
          </View>
          
        </View>
        <View style={questionStyle.boxView}>
          <View style={questionStyle.innerBox}>
            <Text style={questionStyle.innerText}>
              {data.translate}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const questionStyle = StyleSheet.create({
  view: {
    flex: 2,
  },
  
  boxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    flex: 1,
    width: 90 + '%',
    margin: 10,
    opacity: 0.95,
    borderColor: '#2089dc',
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerText: {

    fontSize: 20
  }, 
  speaker: {
    position: 'absolute',
    top: 0,
    marginTop: 5,
    padding: 15,
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
    return(
      <View style={afterCourseStyle.view}>
        <Text style={afterCourseStyle.headerText}>Course</Text>
        <Text style={afterCourseStyle.titleText}>{exampleTest.name}</Text>
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

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressLevel: 0,
      currentQuestion: 1
    }
    this._nextButtonPress = this._nextButtonPress.bind(this);
    this._onGoAgain = this._onGoAgain.bind(this);
  }

  _nextButtonPress () {
    console.log('press');
    const amountOfQuestions = exampleTest.data.length - 1;
    
    console.log(this.state.currentQuestion)
    const progressLevel = Math.floor(this.state.currentQuestion/amountOfQuestions * 100);
    if(this.state.currentQuestion <= amountOfQuestions) {
      this.setState({
        progressLevel,
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }
  _onGoAgain() {
    this.setState({
      progressLevel: 0,
      currentQuestion: 1
    })
  }
  _onGoTest() {
    console.log('test')
  }

  render() {
    const {progressLevel, currentQuestion} = this.state;
    return(
      <View style={testStyles.view}>
        <ImageBackground source={{uri: exampleTest.image}} style={testStyles.backgroundImage}>
          <View style={testStyles.backgroundOverlay}>
            <ScreenHeader title={exampleTest.name} />
            {progressLevel !== 100 ? 
            <View style={testStyles.view}>
              <ProgressBar progressLevel={progressLevel} />
              <Question data={exampleTest.data[currentQuestion -1]} />
              <NextButton onPress={this._nextButtonPress}/>
            </View>
            : <AfterCourse
                onGoAgain={this._onGoAgain}
                onGoTest={this._onGoTest}
              />
            }
            
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const testStyles = StyleSheet.create({
  view: {
    flex: 1
  },
  backgroundImage: {
    flex: 1
  },
  backgroundOverlay: {
    backgroundColor: 'rgba(32,137,220, 0.1)', //#2089dc default color
    flex: 1
  }

})

export default Test;