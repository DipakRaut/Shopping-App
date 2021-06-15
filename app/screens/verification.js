import React, { useState } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import StatusBarScreen from "../components/StatusBarScreen";
import colors from "../components/colors";
import { useNavigation } from "@react-navigation/native";

const CELL_COUNT = 4;

function Verification() {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={styles.data}>
          <AppText style={styles.heading}>Verification</AppText>
          <AppText style={styles.para}>
            we have sent a verification code to your email ID
          </AppText>

          <View style={styles.inputText}>
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>

          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <AppText>Didn't get a code? Tap to resend</AppText>
          </View>

          <AppButton
            title="VERIFY"
            onPress={() => navigation.navigate("ResetPassword")}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AppText>Have a account? </AppText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <AppText>Log in </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Verification;

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
    marginTop: 50,
  },
  tinyLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
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
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  input: {
    width: "20%",
    margin: 8,
    fontSize: 25,
    textAlign: "center",
    color: "white",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    // textDecorationColor: "white",
    // textDecorationLine: "none",
    // width: "100%",
    // color: "white",
    borderBottomWidth: 1,
    // borderColor: colors.border,
    // overlayColor: "white",
    borderBottomColor: "white",
  },
  inputText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
