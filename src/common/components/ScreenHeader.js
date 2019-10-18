import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Modal, Text } from 'react-native';

import { Header, Icon } from 'react-native-elements';
import ConfirmModalComponent from './ConfirmModal.component';


const DrawerButton = (props) => {
  return(
    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={props.navigation.openDrawer}
    >
      <Icon name="bars" type="font-awesome" color="#fff" />
    </TouchableOpacity>    
  )
}

const BackButton = (props) => {
  return(
    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={props.navigation.goBack}
    >
      <Icon name="chevron-left" type="font-awesome" color="#fff" />
    </TouchableOpacity>    
  )
}

const HomeButton = (props) => {
  return(
    <>
    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={props.setModalOpen}
    >
      <Icon name="home" type="font-awesome" color="#fff" />
    </TouchableOpacity>
    
    </>
  )
}

const ScreenHeader = (props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  function onClose() {
    setShowConfirmationModal(false);
  }

  function setModalOpen() {
    setShowConfirmationModal(!showConfirmationModal);
  }

  function onModalConfirm() {
    setShowConfirmationModal(false);
    props.navigation.navigate('Home');
  }

  return (
    <>
    <Header
      leftComponent={
        props.type === "drawer" ?
        <DrawerButton navigation={props.navigation} /> :
        props.type === "home" ?
        <HomeButton navigation={props.navigation} setModalOpen={setModalOpen} /> :
        <BackButton navigation={props.navigation} />
      }
      centerComponent={{text: props.title, style: {color: '#fff', fontSize: 20}}}
      containerStyle={{borderBottomWidth: 0}}
    />
    <ConfirmModalComponent 
      isOpen={showConfirmationModal}
      onClose={onClose}
      onConfirm={onModalConfirm}
      title={props.title}
    />
    </>
  )
}

ScreenHeader.defaultProps = {
  type: ""
}

export default ScreenHeader;