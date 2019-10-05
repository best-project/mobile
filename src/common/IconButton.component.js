import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  Icon
} from 'react-native-elements';


class IconButtonComponent extends Component {
  render() {
    const {name, namespace, size, color, containerColor, containerOpacity, onPress} = this.props;
    return(
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={containerOpacity}
        style={[iconButtonStyle.view, {
          width: size,
          height: size,
          backgroundColor: containerColor,
          borderRadius: size
        }]}
      >
          <Icon
            name={name}
            type={namespace}
            color={color}
          />
      </TouchableOpacity>
    )
  }
}

IconButtonComponent.defaultProps = {
  namespace: 'font-awesome',
  size: 30,
  containerOpacity: 0.7,
  color: "#005daa",
  containerColor: "#fff"
}

const iconButtonStyle = StyleSheet.create({
  view: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButtonComponent;