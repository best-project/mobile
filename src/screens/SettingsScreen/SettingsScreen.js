import React from "react";
import { connect } from "react-redux";
import { ScrollView, StyleSheet, Platform } from "react-native";
import { ListItem } from "react-native-elements";
import { setSound } from "../../actions/Settings.actions";
import globalStyles from "../../common/style/global.style";
import SettingsAboutUsComponent from "./components/SettingsAboutUs.component";

const Settings = props => {
  const switchListElements = [
    {
      label: "Autoplay voice",
      isOn: props.Settings.isSoundEnabled,
      onChange: props.setSound
    }
  ];

  const standardListElements = [
    {
      label: "Logout",
      icon: {
        name: "power-off",
        type: "font-awesome",
        color: globalStyles.colors.primaryBlue,
        size: 20
      }
    },
    {
      label: "Reset profile",
      icon: {
        name: "trash",
        type: "font-awesome",
        color: globalStyles.colors.primaryBlue,
        size: 20
      }
    },
    {
      label: "Change password",
      icon: {
        name: "lock",
        type: "font-awesome",
        color: globalStyles.colors.primaryBlue,
        size: 20
      }
    }
  ];

  return (
    <ScrollView style={settingsStyle.view}>
      {switchListElements.length &&
        switchListElements.map((item, index) => (
          <ListItem
            switch={{
              value: item.isOn,
              onValueChange: value => item.onChange(value),
              thumbColor:
                Platform.OS === "android"
                  ? globalStyles.colors.primaryBlue
                  : null
            }}
            key={index}
            hideChevron={true}
            title={item.label}
            bottomDivider
            containerStyle={settingsStyle.listItem}
          />
        ))}
      {standardListElements.length &&
        standardListElements.map((item, index) => (
          <ListItem
            rightIcon={item.icon}
            title={item.label}
            key={index}
            bottomDivider
            containerStyle={settingsStyle.listItem}
            onPress={event => console.log(event)}
          />
        ))}
      <SettingsAboutUsComponent />
    </ScrollView>
  );
};

const settingsStyle = StyleSheet.create({
  view: {
    flex: 1
  },
  listItem: {
    height: 55
  }
});

const mapStateToProps = state => ({
  Settings: state.Settings
});

export default connect(
  mapStateToProps,
  { setSound }
)(Settings);
