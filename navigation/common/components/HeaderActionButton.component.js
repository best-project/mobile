import React, {useState, useEffect} from 'react';

import { Icon } from 'react-native-elements';
import { TouchableOpacity, BackHandler } from 'react-native';
import ConfirmModalComponent from '../../../src/common/components/ConfirmModal.component';

const HeaderActionButtonComponent = (props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick, false);

    return (() => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    })
  }, [])
  

  function handleBackButtonClick() {
    // if(props.type === "home") {
    //   setModalOpen();
    // } 
    // return;
    console.log('click')
  }

  function onClose() {
    setShowConfirmationModal(false);
  }

  function setModalOpen() {
    setShowConfirmationModal(true);
  }

  function onModalConfirm() {
    setShowConfirmationModal(false);
    props.onClick();
  }

  const DrawerButtonIcon = <Icon name="bars" type="font-awesome" color="#fff" containerStyle={{paddingLeft: 10}} />;
  const BackButtonIcon = <Icon name="chevron-left" type="font-awesome" color="#fff" containerStyle={{paddingLeft: 10}}/>;
  const HomeButtonIcon = <Icon name="home" type="font-awesome" color="#fff" containerStyle={{paddingLeft: 10}} />;

  return (
    <>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.type === "home" ? setModalOpen : props.onClick}
    >
      {props.type === "drawer" ? DrawerButtonIcon : 
        props.type === "back" ? BackButtonIcon : 
        props.type === "home" ? HomeButtonIcon : 
        undefined
      }
    </TouchableOpacity>
    <ConfirmModalComponent 
      isOpen={showConfirmationModal}
      onClose={onClose}
      onConfirm={onModalConfirm}
      title={'props.title'}
    />
    </>
  )
}

export default HeaderActionButtonComponent;