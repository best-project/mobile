import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

import ScreenHeader from '../components/ScreenHeader';

import ProgressBar from '../components/ProgressBar';

class Question extends Component {
  render() {
    const {word} = this.props.data;
    return(
      <View style={questionStyle.view}>
        <View style={questionStyle.questionView}>
          <Text style={questionStyle.text}>{word}</Text>
        </View>
      </View>
    );
  }
}

const questionStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  questionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
  }
});

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false
    }
    this._onPress = this._onPress.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      showOverlay: false
    })
  }

  _onPress() {
    const {valid} = this.props;
    this.props.onPress(valid);
    this.setState({
      showOverlay: true
    })
  }
  render() {
    const {translate, image} = this.props.data;
    const {valid, answered} = this.props;
    const {showOverlay} = this.state;
    return (
      <View style={answerStyle.view}>
        {showOverlay || valid && answered ? <OverlayBox type={valid}/> : null}
        <TouchableOpacity onPress={this._onPress} activeOpacity={0.7} disabled={answered}>
          <ImageBackground
            source={{uri: image}}
            style={answerStyle.imageBackground}
            imageStyle={answerStyle.imageStyle}
          >
            <View style={answerStyle.translateView}>
              <Text style={answerStyle.translateText}>{translate}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}

class AnswersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexes: [1,2,3,4],
      answered: false
    }

    this._onAnswerPress = this._onAnswerPress.bind(this);
  }

  componentDidMount() {
    this.setState({
      indexes: this.randomIndexesArray()
    });
    console.log('list mounted')
  }

  _onAnswerPress(value) {
    /*const {valid, invalid, currentQuestion} = this.state;
    this.setState({
      answered: true
    })
    setTimeout(() => {
      if(value) {
        this.setState({
          valid: valid + 1,
        })
      } else {
        this.setState({
          invalid: invalid + 1,
        })
      }
      this.setState({
        currentQuestion: currentQuestion + 1,
        answered: false,
      })
    }, 1000)*/
    console.log(value);
  }

  randomIndexesArray(maxValue, without, amount) {
    const array = [];
    for(let i = 0; i < amount; i++) {
      let item = Math.floor(Math.random() * maxValue);
      while(array.includes(item) || item === without) {
        item = Math.floor(Math.random() * maxValue);
      }
      array.push(item);
    }
    array.push(without);
    return array;
  }

  render() {
    const {indexes, answered} = this.state;
    const {course, currentIndex} = this.props;

    return (
      <View style={testStyle.answersView}>
        {indexes.map(index => {
          return <Answer 
            data={course.data[index]} 
            key={index}
            index={index}
            onPress={this._onAnswerPress} 
            valid={index === currentIndex ? true : false}
            answered={answered}
          />
        })}
      </View>
    );
  }
}

const answerStyle = StyleSheet.create({
  view: {
    width: 150,
    height: 150,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
  },
  imageBackground: {
    width: 100 + '%',
    height: 100 + '%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5,
  }, 
  translateView: {
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  translateText: {
    fontSize: 16,
  }
});

class OverlayBox extends Component {
  render() {
    const {type} = this.props;
    switch(type) {
      case true: 
        return(
          <View style={[overlayBoxStyle.view, {backgroundColor: '#45a647'}]}>
            <Text style={overlayBoxStyle.text}>Good!</Text>
          </View>
        );
      case false:
        return(
          <View style={[overlayBoxStyle.view, {backgroundColor: '#cf4146'}]}>
            <Text style={overlayBoxStyle.text}>Bad</Text>
          </View>
        );
      default:
        return null;
    }
  }
}

const overlayBoxStyle = StyleSheet.create({
  view: {
    position: 'absolute',
    width: 100 + '%',
    height: 100 + '%',
    zIndex: 1,
    opacity: 0.8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: '#fff'
  }
})

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressLevel: 0,
      currentQuestion: 1, 
      valid: 0,
      invalid: 0,
    }
  }
  render() {
    const {progressLevel, currentQuestion} = this.state;
    const course = this.props.Courses.coursesList[12];
    const currentIndex = currentQuestion - 1;
    return (
      <View style={testStyle.view}>
        <ScreenHeader title={course.name} />
        <Text>{'Invalid ' + this.state.invalid}</Text>
        <Text>{'Valid ' + this.state.valid}</Text>
        <View style={testStyle.view}>
          <ProgressBar 
            progressLevel={progressLevel}
            backgroundColor="#2089dc"
          />
          <Question data={course.data[currentIndex]}/>
          <AnswersList 
            currentIndex={currentIndex}
            course={course}
          />
        </View>
      </View>
    )
  }
}

const testStyle = StyleSheet.create({
  view: {
    flex: 1,
  }, 
  answersView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = state => ({
  Courses: state.Courses
});

export default connect(mapStateToProps, {})(Test);