import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { shuffleArray } from "../../../common/services/helpers";
import PuzzleComponent from "../components/Puzzle.component";
import AnswerOverlayComponent from "../components/AnswerOverlay.component";

const DELAY_AFTER_QUESTION = 1000; //ms

class PuzzleTestAnswersListModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: [],
      selectedPuzzle: [],
      inProgress: false,
      isAnswered: false,
      isValid: false
    };

    this.puzzleCreator = this.puzzleCreator.bind(this);
    this._onPuzzlePress = this._onPuzzlePress.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    this.isMounted = true;
    this.puzzleCreator();
  }

  puzzleCreator() {
    const puzzle = this.puzzleSpliter();
    this.setState({
      puzzle,
      inProgress: true
    });
  }

  puzzleSpliter() {
    const { validAnswer } = this.props;
    let puzzle = validAnswer.split(" ");
    puzzle = shuffleArray(puzzle);
    return puzzle;
  }

  _onPuzzlePress(value) {
    const { selectedPuzzle } = this.state;
    if (!selectedPuzzle.includes(value)) {
      this.setState({
        selectedPuzzle: [...selectedPuzzle, value]
      });
    } else {
      this.setState({
        selectedPuzzle: [...selectedPuzzle.filter(item => item !== value)]
      });
    }
  }

  componentDidUpdate(previousProps) {
    const { selectedPuzzle, puzzle, isAnswered } = this.state;
    if (selectedPuzzle.length === puzzle.length && !isAnswered && puzzle.length) {
      this.checkAnswer();
    }
    const { currentQuestion } = this.props;
    if (previousProps.currentQuestion !== currentQuestion) {
      this.puzzleCreator();
    }
  }

  checkAnswer() {
    const { selectedPuzzle } = this.state;
    const { validAnswer } = this.props;
    const answer = selectedPuzzle.join(" ");
    if (answer === validAnswer) {
      this.onValidAnswer();
    } else {
      this.onInvalidAnswer();
    }
  }

  onValidAnswer() {
    this.setState({
      isValid: true,
      isAnswered: true
    });
    setTimeout(() => {
      this.clearState();
      this.props.onValidAnswer();
    }, DELAY_AFTER_QUESTION);
  }

  onInvalidAnswer() {
    this.setState({
      isValid: false,
      isAnswered: true
    });
    setTimeout(() => {
      this.clearState();
      this.puzzleCreator();
    }, DELAY_AFTER_QUESTION);
  }

  clearState() {
    this.setState({
      puzzle: [],
      selectedPuzzle: [],
      inProgress: false,
      isAnswered: false,
      isValid: false
    });
  }

  getCreatedAnswer() {
    return this.state.selectedPuzzle.join(" ");
  }

  render() {
    const { puzzle, selectedPuzzle, isAnswered, isValid } = this.state;
    return (
      <View style={answerContainerStyle.view}>
        <View style={answerContainerStyle.answerCompleter}>
          {selectedPuzzle.length && !isAnswered
            ? selectedPuzzle.map((item, index) => <PuzzleComponent key={index} name={item} onPuzzlePress={() => this._onPuzzlePress(item)} />)
            : null}
          {isAnswered && <AnswerOverlayComponent isValid={isValid}>{this.getCreatedAnswer()}</AnswerOverlayComponent>}
        </View>
        <View style={answerContainerStyle.container}>
          {puzzle.length
            ? puzzle.map((item, index) => (
                <PuzzleComponent key={index} name={item} onPuzzlePress={() => this._onPuzzlePress(item)} isDisabled={selectedPuzzle.includes(item)} />
              ))
            : null}
        </View>
      </View>
    );
  }
}

const answerContainerStyle = StyleSheet.create({
  view: {
    flex: 2
  },
  answerCompleter: {
    flex: 1 / 3,
    width: 90 + "%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    backgroundColor: "#fafafa",
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "dashed",
    borderColor: "#2089dc"
  },
  container: {
    flex: 2 / 3,
    width: 90 + "%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  box: {
    backgroundColor: "#2089dc",
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5
  },
  boxText: {
    fontSize: 16,
    color: "#fff"
  }
});

export default PuzzleTestAnswersListModule;
