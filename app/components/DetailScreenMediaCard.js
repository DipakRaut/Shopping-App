import React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import colors from "./colors";
import { Ionicons } from "@expo/vector-icons";

function DetailScreenMediaCard(props) {
  function ProgressBar() {
    return (
      <View style={styles.progressBarMain}>
        <View style={styles.mainBar}>
          <View style={styles.progressBar} />
        </View>
        <Text style={styles.timer}>4:22/10:02</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.image}
        resizeMode="stretch"
        source={require("../assets/shoe-media.png")}
      >
        <Image
          style={styles.videoIcon}
          source={require("../assets/electronics.png")}
        />
        <View style={styles.playButton}>
          <Ionicons name="md-play-outline" size={24} color="white" />
        </View>
      </ImageBackground>
      <ProgressBar />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  progressBarMain: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.accent,
  },

  mainBar: {
    flexGrow: 1,
    height: 5,
    backgroundColor: "#afafaf",
  },

  progressBar: {
    width: "45%",
    height: "100%",
    backgroundColor: "#b5315e",
  },

  timer: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 10,
  },

  videoIcon: {
    width: 25,
    height: 15,
    position: "absolute",
    right: 18,
    top: 18,
  },

  playButton: {
    width: 43,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.65,
    backgroundColor: "black",
    borderRadius: 180,
  },
});

export default DetailScreenMediaCard;
