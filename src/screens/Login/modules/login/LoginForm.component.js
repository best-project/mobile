import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Button} from 'react-native-elements';
import LoginFormInputComponent from '../common/LoginFormInput.component';

class LoginFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      isLoading: false,
      errors: {
        login: '',
        password: ''
      }
    }

    this._onLoginChange = this._onLoginChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
  }
  _onLoginChange(text) {
    this.setState({
      login: text
    });
  }

  _onLoginBlur() {
    console.log('login blur')
  }

  _onPasswordBlur() {
    console.log('passwd blur')
  }

  _onPasswordChange(text) {
    this.setState({
      password: text
    });
  }

  _onSubmit() {
    this.setState({
      isLoading: true
    });

    
    this.props.navigation.navigate('Home')
    

    // api call
  }

  _onForgot() {
    console.log('forgot');
  }

  _onNewAccount() {
    this.props.navigation.navigate('Register');
  }

  render() {
    const {login, password, isLoading, errors} = this.state;
    return(
      <View style={loginFormStyle.view}>
        <LoginFormInputComponent 
          type="Login"
          iconName="user"
          value={login}
          onChange={this._onLoginChange}
          onBlur={this._onLoginBlur}
          errorMessage={errors.login}
        />
        <LoginFormInputComponent
          type="Password"
          iconName="lock"
          value={password}
          onChange={this._onPasswordChange}
          onBlur={this._onPasswordBlur}
          secure={true}
          errorMessage={errors.password}
        />
        <Button 
          title="Login"
          loading={isLoading}
          containerStyle={loginFormStyle.submitButton}
          onPress={this._onSubmit}
        />
        <View style={loginFormStyle.options}>
          <TouchableOpacity
            onPress={this._onForgot}
            activeOpacity={0.7}
          >
            <Text style={loginFormStyle.optionText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onNewAccount()}
            activeOpacity={0.7}
          >
            <Text style={loginFormStyle.optionText}>New user? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const loginFormStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    width: 90 + '%'
  },
  submitButton: {
    marginTop: 10,
    width: 100 + '%'
  },
  options: {
    width: 100 + '%',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  optionText: {
    color: '#fff',
    fontSize: 12
  }
})

export default LoginFormComponent;