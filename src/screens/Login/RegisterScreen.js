import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RegisterFormComponent from "./modules/register/RegisterForm.component";
import globalStyles from "../../common/style/global.style";
import BrandLogoComponent from "./components/BrandLogo.component";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={registerStyle.view}
        behavior="height"
        enabled
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          <LinearGradient
            colors={[
              globalStyles.colors.primaryBlue,
              globalStyles.colors.secondaryBlue
            ]}
            style={registerStyle.linearGradient}
          >
            <View style={registerStyle.viewContainer}>
              <BrandLogoComponent />
              <RegisterFormComponent navigation={this.props.navigation} />
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const registerStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: globalStyles.colors.primaryBlue
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 90 + "%"
  }
});

export default RegisterScreen;
