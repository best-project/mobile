import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import polslLogo from "../../../common/icons/polsl_logo.png";
import { ListItem } from "react-native-elements";
import michal_meczynski from "../../../../assets/michal_meczynski.jpg";
import michal_kempski from "../../../../assets/michal_kempski.jpg";
import marcin_josinski from "../../../../assets/marcin_josinski.jpg";
import globalStyles from "../../../common/style/global.style";

const authors = [
  {
    name: "Michał Męczyński",
    role: "Frontend developer",
    avatar: michal_meczynski
  },
  {
    name: "Marcin Josiński",
    role: "Backend developer",
    avatar: marcin_josinski
  },
  {
    name: "Michał Kempski",
    role: "Backend developer",
    avatar: michal_kempski
  }
];

const SettingsAboutUsComponent = props => {
  return (
    <View style={aboutUsStyle.view}>
      <Text style={aboutUsStyle.title}>About us</Text>
      {authors.map((author, index) => (
        <ListItem
          key={index}
          title={author.name}
          subtitle={author.role}
          leftAvatar={{ source: author.avatar }}
          containerStyle={{
            width: 100 + "%"
          }}
        />
      ))}
      <Image
        style={aboutUsStyle.image}
        containerStyle={aboutUsStyle.imageContainer}
        source={polslLogo}
      />
      <Text style={aboutUsStyle.subtitle}>Copyright 2020 &copy;</Text>
    </View>
  );
};

const aboutUsStyle = StyleSheet.create({
  view: {
    width: 100 + "%",
    paddingVertical: 15,
    alignItems: "center"
  },
  image: {
    width: 120,
    height: 120
  },
  imageContainer: {
    paddingTop: 30
  },
  author: {},
  title: {
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#666666"
  },
  subtitle: {
    color: globalStyles.colors.superdarkBlue
  }
});

export default SettingsAboutUsComponent;
