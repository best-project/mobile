import React from "react";
import { View, Text, StyleSheet } from "react-native";
import socialLoginsService from "../../../../common/services/social-logins.service";
import SocialIconButtonComponent from "../../components/SocialIconButton.component";

const SocialLoginComponent = props => {
  function facebookClick() {
    socialLoginsService.facebookLogin();
  }

  function twitterClick() {
    console.log("twitter click");
  }

  function instagramClick() {
    console.log("ig click");
  }

  return (
    <View style={socialLoginsStyle.view}>
      <Text style={socialLoginsStyle.title}>Or login with</Text>
      <View style={socialLoginsStyle.containerView}>
        <SocialIconButtonComponent name="facebook" onPress={facebookClick} />
        <SocialIconButtonComponent name="twitter" onPress={twitterClick} />
        <SocialIconButtonComponent name="instagram" onPress={instagramClick} />
      </View>
    </View>
  );
};

const socialLoginsStyle = StyleSheet.create({
  view: {
    flex: 1,
    width: 90 + "%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff"
  },
  containerView: {
    marginTop: 10,
    width: 100 + "%",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default SocialLoginComponent;
