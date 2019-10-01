import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
 
import Confetti from 'react-native-confetti';

class ConfettiComponent extends Component {
  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }
 
  componentWillUnmount () {
    if (this._confettiView) {
        this._confettiView.stopConfetti();
    }
  }

  render() {
    const {confettiCount, duration} = this.props;
    return (
      <View style={confettiComponentStyle.view}>
        <Confetti 
          ref={(node) => this._confettiView = node}
          confettiCount={confettiCount}
          duration={duration}
        />
      </View>
    )
  }
}

ConfettiComponent.defaultProps = {
  confettiCount: 30,
  duration: 3000
}

const confettiComponentStyle = StyleSheet.create({
  view: {
    flex: 1,
    position: 'absolute'
  }
})

export default ConfettiComponent;