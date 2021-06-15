import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Image, View, StyleSheet, Text, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import { Card } from "react-native-paper";
import colors from "./colors";
import { useNavigation } from "@react-navigation/native";

export default function UseAddressForProduct({ points, image }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Card
        style={{
          width: "80%",
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: "rgb(45, 27, 79)",
        }}
      >
        <View style={{ backgroundColor: "rgb(83, 49, 148)" }}>
          <Card.Title
            title="Image Name"
            subtitle="Description About Image"
            style={{ color: "white" }}
          />
          <Card.Title
            title="points"
            style={{ position: "absolute", right: -240, color: "white" }}
          />
        </View>

        <Card.Content
          style={{ marginTop: 10, backgroundColor: "rgb(45, 27, 79)" }}
        >
          <TextInput
            style={styles.inputData}
            placeholder="FIRST NAME"
            autoCapitalize="none"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
          />
          <TextInput
            style={styles.inputData}
            placeholder="LAST NAME"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.inputData}
            placeholder="PHONE NO"
            autoCapitalize="none"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
          />
          <TextInput
            style={styles.inputData}
            placeholder="ADDRESS"
            autoCapitalize="none"
            placeholderTextColor="white"
            autoCorrect={false}
            onChangeText={(data) => console.log(data)}
          />
        </Card.Content>

        <Card.Actions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppButton
            title="BUY NOW"
            onPress={() => {
              navigation.navigate("ThankYou");
            }}
          />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  inputData: {
    textDecorationLine: "none",
    width: "80%",
    color: "white",
    borderBottomWidth: 1,
    borderColor: colors.border,
    fontSize: 15,
    borderBottomColor: colors.border,
    marginBottom: 20,
  },
});
