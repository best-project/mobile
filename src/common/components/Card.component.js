import React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

const CardComponent = props => {
  return (
    <View style={[portletCardStyle.view, { backgroundColor: props.backgroundColor, minHeight: props.height }]}>
      <TouchableOpacity onPress={props.onClick} activeOpacity={0.7}>
        <ImageBackground source={{ uri: props.image }} style={portletCardStyle.imageView} imageStyle={{ opacity: 0.9 }}></ImageBackground>
        <View style={portletCardStyle.contentView}>
          <Text style={portletCardStyle.titleText}>{props.title}</Text>
          <Text style={portletCardStyle.descriptionText}>{props.description}</Text>
          <View style={portletCardStyle.rateView}>
            <Rating imageSize={18} readonly startingValue={props.rate} style={portletCardStyle.rating} />
            <Text style={portletCardStyle.rateText}>{props.rate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

CardComponent.defaultProps = {
  backgroundColor: "#fff",
  height: 300
};

const portletCardStyle = StyleSheet.create({
  view: {
    width: 100 + "%",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 5,
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  imageView: {
    height: 180,
    width: 100 + "%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292b2a",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  imageBackground: {
    height: 100,
    width: 100 + "%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  contentView: {
    paddingLeft: 15,
    paddingVertical: 5
  },
  titleText: {
    fontSize: 30,
    color: "#4c4c4c",
    fontWeight: "bold"
  },
  descriptionText: {
    fontSize: 14,
    color: "#757575"
  },
  rateView: {
    paddingTop: 15
  },
  rating: {},
  rateText: {
    color: "#757575",
    alignSelf: "center"
  }
});

export default CardComponent;
