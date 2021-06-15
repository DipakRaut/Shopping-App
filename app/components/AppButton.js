import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Colors from "./colors";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.button, style]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    width: "90%",
    padding: 15,
    borderRadius: 20,
    flexDirection: "column",
    marginVertical: 5,
    marginTop: 20,
  },
  button: {
    fontSize: 15,
  },
});
