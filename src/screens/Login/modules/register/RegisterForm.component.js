import React, { useState, useEffect, Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import LoginFormInput from "../../components/LoginFormInput.component";
import validationHelpers from "../../../../common/services/validation.helpers";

const RegisterFormComponent = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  const isFormValid = !(
    errors.login ||
    errors.password ||
    errors.email ||
    errors.confirmPassword
  );

  function onLoginChange(value) {
    setErrors({
      ...errors,
      login: ""
    });
    setLogin(value);
  }

  function onPasswordChange(value) {
    setErrors({
      ...errors,
      password: ""
    });
    setPassword(value);
  }

  function onConfirmPasswordChange(value) {
    setErrors({
      ...errors,
      confirmPassword: ""
    });
    setConfirmPassword(value);
  }

  function onEmailChange(value) {
    setErrors({
      ...errors,
      email: ""
    });
    setEmail(value);
  }

  function loginValidate() {
    if (validationHelpers.validateLoginLength) {
      setErrors({
        ...errors,
        login: "Login is too short."
      });
    }
  }

  function passwordValidate() {
    if (validationHelpers.validatePassword(password)) {
      setErrors({
        ...errors,
        password: "Password must contain uppercase and numeric character."
      });
    }
    if (validationHelpers.validatePasswordLength(password)) {
      setErrors({
        ...errors,
        password: "Password is too short."
      });
    }
  }

  function confirmPasswordValidate() {
    if (confirmPassword !== password) {
      setErrors({
        ...errors,
        confirmPassword: "Passwords are different."
      });
    }
  }

  function emailValidate() {
    if (validationHelpers.validateEmail(email)) {
      setErrors({
        ...errors,
        email: "Invalid email address."
      });
    }
  }

  function onSubmit() {
    loginValidate();
    passwordValidate();
    confirmPasswordValidate();
    emailValidate();
    if (isFormValid) {
      setIsLoading(true);
      const request = {};
      // api call
      props.navigation.navigate("Login");
    }
  }

  return (
    <View style={registerFormStyle.view}>
      <LoginFormInput
        type="Login"
        iconName="user"
        value={login}
        onChange={onLoginChange}
        onBlur={loginValidate}
        errorMessage={errors.login}
      />
      <LoginFormInput
        type="Email"
        iconName="envelope"
        value={email}
        onChange={onEmailChange}
        onBlur={emailValidate}
        errorMessage={errors.email}
        keyboardType="email-address"
      />
      <LoginFormInput
        type="Password"
        iconName="lock"
        value={password}
        onChange={onPasswordChange}
        secure={true}
        onBlur={passwordValidate}
        errorMessage={errors.password}
      />
      <LoginFormInput
        type="Confirm password"
        iconName="lock"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        secure={true}
        onBlur={confirmPasswordValidate}
        errorMessage={errors.confirmPassword}
      />
      <Button
        title="Register"
        loading={isLoading}
        containerStyle={registerFormStyle.submitButton}
        onPress={onSubmit}
      />
    </View>
  );
};
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
