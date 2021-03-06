import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity, BackHandler } from "react-native";
import ConfirmModalComponent from "../../../src/common/components/ConfirmModal.component";

const HeaderActionButtonComponent = props => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  function handleBackPress() {
    if (props.needConfirmation) {
      setModalOpen();
    } else {
      props.onClick();
    }
    return true;
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

  const DrawerButtonIcon = (
    <Icon
      name="bars"
      type="font-awesome"
      color="#fff"
      containerStyle={{ paddingLeft: 15 }}
    />
  );
  const BackButtonIcon = (
    <Icon
      name="chevron-left"
      type="font-awesome"
      color="#fff"
      containerStyle={{ paddingLeft: 15 }}
    />
  );
  const HomeButtonIcon = (
    <Icon
      name="home"
      type="font-awesome"
      color="#fff"
      containerStyle={{ paddingLeft: 15 }}
    />
  );

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.needConfirmation === true ? setModalOpen : props.onClick}
      >
        {props.type === "drawer"
          ? DrawerButtonIcon
          : props.type === "back"
          ? BackButtonIcon
          : props.type === "home"
          ? HomeButtonIcon
          : undefined}
      </TouchableOpacity>
      <ConfirmModalComponent
        isOpen={showConfirmationModal}
        onClose={onClose}
        onConfirm={onModalConfirm}
        title={props.title}
      />
    </>
  );
};

export default HeaderActionButtonComponent;
