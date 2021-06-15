import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import { useNavigation } from "@react-navigation/native";

function resetPassword() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={styles.data}>
          <AppText style={styles.heading}>Reset Password</AppText>

          <View style={styles.instruction}>
            <AppText style={styles.para}>
              Email address verified! Set a new password
            </AppText>
          </View>

          <TextInput
            style={styles.inputData}
            placeholder="PASSWORD"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={(data) => {
              console.log(data);
            }}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.inputData}
            placeholder="CONFIRM PASSWORD"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(data) => {
              console.log(data);
            }}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            secureTextEntry
          />

          <View style={{ marginBottom: 10 }} />
          <AppButton title="RESET PASSWORD" />
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
  );
}
export default resetPassword;

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
    marginTop: 30,
    marginBottom: 20,
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
