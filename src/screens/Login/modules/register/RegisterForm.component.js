import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import LoginFormInput from "../../components/LoginFormInput.component";

class RegisterFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      confirmPassword: "",
      email: "",
      isLoading: false,
      errors: []
    };

    this._onLoginChange = this._onLoginChange.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onConfirmPasswordChange = this._onConfirmPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onLoginChange(text) {
    this.setState({
      login: text
    });
  }

  _onEmailChange(text) {
    this.setState({
      email: text
    });
  }

  _onPasswordChange(text) {
    this.setState({
      password: text
    });
  }

  _onConfirmPasswordChange(text) {
    this.setState({
      confirmPassword: text
    });
  }

  _onSubmit() {
    this.setState({
      clicked: true
    });
  }

  checkValidation() {}

  render() {
    const { login, email, password, confirmPassword, isLoading } = this.state;
    return (
      <View style={registerFormStyle.view}>
        <LoginFormInput type="Login" iconName="user" value={login} onChange={this._onLoginChange} onBlur={() => {}} />
        <LoginFormInput type="Email" iconName="envelope" value={email} onChange={this._onEmailChange} onBlur={() => {}} />
        <LoginFormInput type="Password" iconName="lock" value={password} onChange={this._onPasswordChange} secure={true} onBlur={() => {}} />
        <LoginFormInput
          type="Confirm password"
          iconName="lock"
          value={confirmPassword}
          onChange={this._onConfirmPasswordChange}
          secure={true}
          onBlur={() => {}}
        />
        <Button title="Register" loading={isLoading ? true : false} containerStyle={registerFormStyle.submitButton} onPress={this._onSubmit} />
      </View>
    );
  }
}
const registerFormStyle = StyleSheet.create({
  view: {
    flex: 2,
    alignItems: "center",
    paddingTop: 15,
    width: 90 + "%"
  },
  submitButton: {
    marginTop: 10,
    width: 100 + "%"
  }
});

export default RegisterFormComponent;
