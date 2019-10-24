import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import globalStyles from "../../../common/style/global.style";

const CourseManagerActionIconButtonComponent = props => {
  return (
    <TouchableOpacity style={actionButtonStyle.view} activeOpacity={0.7} onPress={props.onClick}>
      <Icon name={props.icon} type={props.namespace} size={30} color={globalStyles.colors.darkBlue} />
      <Text style={actionButtonStyle.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

CourseManagerActionIconButtonComponent.defaultProps = {
  namespace: "font-awesome"
};

const actionButtonStyle = StyleSheet.create({
  view: {
    flex: 1 / 3,
    borderColor: globalStyles.colors.primaryBlue,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderRadius: 3,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    alignContent: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    color: globalStyles.colors.darkBlue
  }
});

export default CourseManagerActionIconButtonComponent;
