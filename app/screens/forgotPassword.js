import React, { useState } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import { useNavigation } from "@react-navigation/native";

function forgotPassword() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.data}>
            <AppText style={styles.heading}>Forgot Password?</AppText>

            <View style={styles.instruction}>
              <AppText style={styles.para}>
                Give us your Registered email Address and we will send your link
                to reset your password
              </AppText>
            </View>

            <TextInput
              style={styles.inputData}
              placeholder="EMAIL"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(data) => {
                console.log("data");
              }}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
            />

            <View style={{ marginBottom: 40 }} />
            <AppButton
              title="SEND"
              onPress={() => navigation.navigate("Verification")}
            />
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <AppText>Have a account? </AppText>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <AppText>Log in </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default forgotPassword;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  tinyLogo: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  heading: {
    fontSize: 30,
  },
  data: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  para: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  instruction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
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
