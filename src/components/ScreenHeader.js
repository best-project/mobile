import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Header, Icon } from 'react-native-elements';


class Drawer extends Component {
  render() {
    return(
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => this.props.navigation.openDrawer()}
      >
        <Icon
        name="bars"
        type="font-awesome"
        color="#fff"
      />
      </TouchableOpacity>    
    )
  }
}

class GoBack extends Component {
  render() {
    return(
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => this.props.navigation.goBack(null)}
      >
        <Icon
        name="arrow-left"
        type="font-awesome"
        color="#fff"
      />
      </TouchableOpacity>    
    )
  }
}

class ScreenHeader extends Component {
  render() {
    const {title, navigation, type} = this.props;
    return (
      <Header
        leftComponent={
          type === "drawer" ?
          <Drawer navigation={navigation}/> : <GoBack navigation={navigation} />
        }
        centerComponent={{text: title, style: {color: '#fff', fontSize: 20}}}
        containerStyle={{borderBottomWidth: 0}}
      />
    )
  }
}

export default ScreenHeader;