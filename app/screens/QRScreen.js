import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../components/colors";

function QRScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/scanner.jpg")}
      />
    </View>
  );
}

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    height: 300,
    width: 300,
  },
});
