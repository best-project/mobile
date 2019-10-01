import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import {mixDifferentAnswersIndexes} from '../../../services/helpers';
import AnswerComponent from '../components/Answer.component';


class AnswersListModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answersList: [],
      answered: false,
      isLoading: true
    }
    this.blockDoublePress = this.blockDoublePress.bind(this);
    
  }

  componentDidMount() {
    this.createAnswersList();
  }

  componentDidUpdate(previousProps) {
    if(previousProps.currentQuestion !== this.props.currentQuestion) {
      this.createAnswersList();
    }
  }

  createAnswersList() {
    const length = this.props.data.length;
    const {currentQuestion, data} = this.props;
    this.setState({
      isLoading: true
    });
    const list = mixDifferentAnswersIndexes(length, currentQuestion, 4);
    const answersList = []
    list.forEach(index => {
      const item = {
        word: data[index].word,
        translate: data[index].translate,
        image: data[index].image
      }
      answersList.push(item);
    })
    this.setState({
      indexList: list,
      answersList,
      isLoading: false
    })
  }

  blockDoublePress() {
    this.setState({
      answered: !this.state.answered
    });

    setTimeout(() => {
      this.setState({
        answered: !this.state.answered
      });
    }, 1000)
  }

  render() {
    const {data, _onAnswerPress, currentQuestion} = this.props;
    const {answered, answersList, isLoading} = this.state;
    
    return (
      <View style={answerListStyle.view}> 
        {!isLoading && answersList.map((answer, index) => (
          <AnswerComponent 
            key={index}
            answer={answer.translate}
            image={answer.image}
            valid={answer.translate === data[currentQuestion].translate ? true : false}
            answered={answered}
            _onAnswerPress={_onAnswerPress}
            blockDoublePress={this.blockDoublePress}
          />
        ))}
      </View>
    )
  }
}
const answerListStyle = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexWrap: 'wrap'
  },
})

export default AnswersListModule;