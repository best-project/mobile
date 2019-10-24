import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SocialLoginComponent from "./modules/login/SocialLogin.component";
import LoginFormComponent from "./modules/login/LoginForm.component";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../../common/style/global.style";
import BrandLogoComponent from "./components/BrandLogo.component";

const LoginScreen = props => {
  return (
    <KeyboardAvoidingView style={loginStyles.view} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <LinearGradient colors={[globalStyles.colors.primaryBlue, globalStyles.colors.secondaryBlue]} style={loginStyles.linearGradient}>
          <View style={loginStyles.viewContainer}>
            <BrandLogoComponent />
            <LoginFormComponent navigation={props.navigation} />
            <SocialLoginComponent />
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const loginStyles = StyleSheet.create({
  view: {
    flex: 2
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 90 + "%"
  }
});

const mapStateToProps = state => ({
  Profile: state.Profile
});

export default connect(
  mapStateToProps,
  {}
)(LoginScreen);
