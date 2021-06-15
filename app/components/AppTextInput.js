import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import colors from "./colors";
import { color } from "react-native-elements/dist/helpers";
// import colors from "./colors";

function AppTextInput({ style, width = "90%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }, style]}>
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: "row",
    height: 50,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    textDecorationColor: "white",
    textDecorationLine: "none",
    width: "100%",
    color: "white",
    borderBottomWidth: 1,
    borderColor: colors.border,
    overlayColor: "white",
    borderBottomColor: "white",
  },
});
//secureTextEntry, maxLength, keyboardType, clearButtonMode for IOS
