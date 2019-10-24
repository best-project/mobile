import React from "react";
import IconButtonComponent from "../../../common/components/IconButton.component";
import globalStyles from "../../../common/style/global.style";

const SocialIconButtonComponent = props => {
  return <IconButtonComponent name={props.name} size={50} color={globalStyles.colors.darkBlue} containerColor="#fff" onPress={props.onPress} />;
};

export default SocialIconButtonComponent;
