import React from "react";
import * as Font from "expo-font";
import { Image, View, StyleSheet, TextInput, ScrollView } from "react-native";

import colors from "./colors";

export default function EditProfile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageCircle}>
          <Image
            style={styles.image}
            source={require("../assets/users/user4.jpg")}
          />
        </View>
        <View style={styles.allInputs}>
          <View style={styles.firstRow}>
            <TextInput
              style={styles.inputData}
              placeholder="FIRST NAME"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(data) => console.log(data)}
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.inputData}
              placeholder="LAST NAME"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(data) => console.log(data)}
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
            />
          </View>
          <TextInput
            style={styles.inputData2}
            placeholder="USERNAME"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.inputData2}
            placeholder="EMAIL ID"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.inputData2}
            placeholder="PHONE NUMBER"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.inputData2}
            placeholder="ADDRESS"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  imageCircle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    color: "blue",
    backgroundColor: "rgb(18, 18, 64)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
  },
  inputData: {
    textDecorationLine: "none",
    width: "40%",
    color: "white",
    borderBottomWidth: 1,
    borderColor: colors.border,
    fontSize: 15,
    borderBottomColor: colors.border,
    marginBottom: 20,
    margin: 20,
  },
  allInputs: {
    display: "flex",
    alignItems: "flex-start",
  },
  inputData2: {
    textDecorationLine: "none",
    width: "80%",
    color: "white",
    borderBottomWidth: 1,
    borderColor: colors.border,
    fontSize: 15,
    borderBottomColor: colors.border,
    marginBottom: 35,
    marginTop: 35,
    margin: 20,
  },
});
