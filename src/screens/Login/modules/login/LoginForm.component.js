import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import LoginFormInputComponent from "../../components/LoginFormInput.component";
import validationHelpers from "../../../../common/services/validation.helpers";

const LoginFormComponent = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    login: "",
    password: ""
  });

  const isFormValid = !(errors.login || errors.password);

  function onLoginChange(value) {
    setErrors({
      ...errors,
      login: ""
    });
    setLogin(value);
  }

  function loginValidate() {
    if (validationHelpers.validateLoginLength) {
      setErrors({
        ...errors,
        login: "Login is too short."
      });
    }
  }

  function onPasswordChange(value) {
    setErrors({
      ...errors,
      password: ""
    });
    setPassword(value);
  }

  function passwordValidate() {
    if (validationHelpers.validatePasswordLength(password)) {
      setErrors({
        ...errors,
        password: "Password is too short."
      });
    }
  }

  function onSubmit() {
    loginValidate();
    passwordValidate();
    if (isFormValid) {
      setIsLoading(true);
      const request = {};
      props.navigation.navigate("Home");
      // api call
    }
  }

  function onForgot() {
    console.log("forgot");
  }

  function onNewAccount() {
    props.navigation.navigate("Register");
  }

  return (
    <View style={loginFormStyle.view}>
      <LoginFormInputComponent
        type="Login"
        iconName="user"
        value={login}
        onChange={onLoginChange}
        onBlur={loginValidate}
        errorMessage={errors.login}
      />
      <LoginFormInputComponent
        type="Password"
        iconName="lock"
        value={password}
        onChange={onPasswordChange}
        onBlur={passwordValidate}
        secure={true}
        errorMessage={errors.password}
      />
      <Button
        title="Login"
        loading={isLoading}
        containerStyle={loginFormStyle.submitButton}
        onPress={onSubmit}
      />
      <View style={loginFormStyle.options}>
        <TouchableOpacity onPress={onForgot} activeOpacity={0.7}>
          <Text style={loginFormStyle.optionText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNewAccount} activeOpacity={0.7}>
          <Text style={loginFormStyle.optionText}>New user? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const loginFormStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    width: 90 + "%"
  },
  submitButton: {
    marginTop: 10,
    width: 100 + "%"
  },
  options: {
    width: 100 + "%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  optionText: {
    color: "#fff",
    fontSize: 12
  }
});

export default LoginFormComponent;
