import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function HomeScreenCard(props) {
  return (
    <View style={styles.main}>
      <Image source={require("../assets/shoe.jpg")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.whiteTextColor, styles.titleText]}>
          Nike Joyride
        </Text>
        <Text style={[styles.whiteTextColor]}>Lorem Ipsum dolor sit amet,</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 15,
    backgroundColor: "#171732",
  },

  whiteTextColor: {
    color: "white",
  },

  titleText: {
    fontSize: 18,
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: "73%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  textContainer: {
    padding: 15,
  },
});

export default HomeScreenCard;
