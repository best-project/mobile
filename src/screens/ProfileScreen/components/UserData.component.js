import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "../../../common/style/global.style";

class UserDataComponent extends Component {
  render() {
    const { nickname, avatar } = this.props;
    return (
      <View style={userDataStyle.view}>
        <LinearGradient colors={[globalStyles.colors.primaryBlue, globalStyles.colors.secondaryBlue]} style={userDataStyle.linearGradient}>
          <View style={userDataStyle.avatarBackground}>
            <Avatar
              rounded
              size="xlarge"
              containerStyle={userDataStyle.avatar}
              source={{
                uri: avatar
              }}
            />
          </View>
          <Text style={userDataStyle.username}>{nickname}</Text>
        </LinearGradient>
      </View>
    );
  }
}

const userDataStyle = StyleSheet.create({
  view: {
    flex: 3,
    borderBottomColor: "rgb(200,200,200)"
  },
  linearGradient: {
    flex: 1,
    width: 100 + "%",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarBackground: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: globalStyles.colors.primaryBlue,
    borderRadius: 100,
    padding: 10
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#fafafa",
    borderStyle: "solid"
  },
  row: {
    flex: 1
  },
  username: {
    fontSize: 26,
    paddingTop: 10,
    fontWeight: "500",
    color: "#fafafa"
  }
});

export default UserDataComponent;
