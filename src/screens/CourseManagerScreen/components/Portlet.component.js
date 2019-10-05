import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

const PortletComponent = (props) => {
  return (
    <View style={[portletStyle.view, props.backgroundColor && {backgroundColor: props.backgroundColor}]}>
      {props.children}
     </View>
  )
}

PortletComponent.defaultProps = {
  backgroundColor: '#fff'
}

const portletStyle = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})

export default PortletComponent;