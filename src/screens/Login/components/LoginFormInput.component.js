import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Icon } from "react-native-elements";
import globalStyles from "../../../common/style/global.style";

class LoginFormInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onFocus() {
    this.setState({
      isFocused: true
    });
  }

  _onBlur() {
    this.setState({
      isFocused: false
    });

    this.props.onBlur();
  }

  render() {
    const { isFocused } = this.state;
    const {
      type,
      iconName,
      value,
      secure,
      errorMessage,
      keyboardType
    } = this.props;
    return (
      <>
        <View
          style={[
            loginFormInputStyle.view,
            isFocused && loginFormInputStyle.viewFocused,
            errorMessage && loginFormInputStyle.viewError
          ]}
        >
          <Icon
            name={iconName}
            type="font-awesome"
            color="#fff"
            containerStyle={loginFormInputStyle.icon}
          />
          <TextInput
            placeholder={type}
            placeholderTextColor="#fff"
            maxLength={25}
            style={loginFormInputStyle.input}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            secureTextEntry={secure ? true : false}
            value={value}
            onChangeText={value => this.props.onChange(value)}
            autoCorrect={false}
            keyboardType={keyboardType && keyboardType}
          />
        </View>
        <View style={loginFormInputStyle.errorView}>
          <Text style={loginFormInputStyle.errorText}>{errorMessage}</Text>
        </View>
      </>
    );
  }
}

const loginFormInputStyle = StyleSheet.create({
  view: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  viewFocused: {
    borderBottomColor: globalStyles.colors.darkBlue
  },
  viewError: {
    borderBottomColor: globalStyles.colors.error
  },
  icon: {
    padding: 0,
    margin: 0,
    width: 10 + "%"
  },
  input: {
    width: 90 + "%",
    color: "#fff",
    alignSelf: "stretch",
    opacity: 0.9
  },
  errorView: {
    width: 100 + "%",
    paddingBottom: 5,
    paddingLeft: 5
  },
  errorText: {
    color: globalStyles.colors.error
  }
});

export default LoginFormInputComponent;
