import React, {useState, useEffect} from 'react';

import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Button, Icon, Overlay } from 'react-native-elements';


const ConfirmModalComponent = (props) => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const screenH = Dimensions.get('window').height;
    setScreenHeight(screenH);
  }, [])

  return (
    <Overlay isVisible={props.isOpen} onBackdropPress={props.onClose} height={screenHeight/3}>
      <>
      <View style={confirmModalStyle.topBarActions}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.onClose} style={confirmModalStyle.closeButton}>
          <Icon name="times" type="font-awesome" color="rgba(0, 0, 0, 0.2)" />
        </TouchableOpacity>
      </View>
      <View style={confirmModalStyle.titleView}>
        <Text style={confirmModalStyle.titleText}>Do you want to leave course?</Text>
        <Text>{props.title}</Text>
      </View>
      <View style={confirmModalStyle.actionsView}>
        <View style={confirmModalStyle.actionsViewInner}>
          <Button 
            title="Cancel"
            type="outline"
            containerStyle={confirmModalStyle.button}
            onPress={props.onClose}
          />
          <Button 
            title="Ok"
            containerStyle={confirmModalStyle.button}
            onPress={props.onConfirm}
          />
        </View>
      </View>
      </>
    </Overlay>
  )
}

const confirmModalStyle = StyleSheet.create({
  backgroundView: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    elevation: 2,
  },
  modalView: {
    position: 'absolute',
    marginLeft: 5 + '%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 90 + '%',
    height: 50 + '%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  topBarActions: {
    height: 30,
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeButton: {

  },
  titleView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,

  },
  button: {
    width: 100,
    paddingHorizontal: 5,
  },
  actionsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionsViewInner: {
    flexDirection: 'row',
  }

})

export default ConfirmModalComponent;