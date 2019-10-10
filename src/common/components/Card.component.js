import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  ImageBackground
} from 'react-native';

const CardComponent = (props) => {
  return (
    <View style={[portletCardStyle.view, {backgroundColor: props.backgroundColor, height: props.height}]}>
      <ImageBackground source={{uri: 'https://www.ang.pl/img/slownik/fruit.jpg'}} style={portletCardStyle.imageView} imageStyle={{opacity: 0.9}}>
      </ImageBackground>
      <View style={portletCardStyle.contentView}>
        <Text style={portletCardStyle.titleText}>{props.title}</Text>
        <Text style={portletCardStyle.descriptionText}>{props.description}</Text>
        <View style={portletCardStyle.rateView}>
          <Text style={portletCardStyle.rateText}>{props.rate}</Text>
        </View>
      </View>
        
    </View>
  )
}

CardComponent.defaultProps = {
  backgroundColor: '#fff',
  height: 300,
}

const portletCardStyle = StyleSheet.create({
  view: {
    width: 100 + '%',
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 5,
    borderStyle: 'solid',
  },
  imageView: {
    height: 180,
    width: 100 + '%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292b2a',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  imageBackground: {
    height: 100,
    width: 100 + '%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contentView: {
    height: 50,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 30,
    color: '#4c4c4c',
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 14,
    color: '#757575',
  }
})

export default CardComponent;