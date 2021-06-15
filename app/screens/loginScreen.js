import React, { useContext } from "react";
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
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../components/colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../config/AuthContext";
import StatusBarScreen from "../components/StatusBarScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("* Email"),
  password: Yup.string().required().min(6).label("* Password"),
});

function LoginScreen() {
  const userContext = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <View style={styles.logo}>
        <Image style={styles.tinyLogo} source={require("../assets/logo.png")} />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.input}>
              <TextInput
                style={styles.inputData}
                placeholder="EMAIL"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                underlineColorAndroid="transparent"
                placeholderTextColor="white"
              />
              {touched.email && (
                <AppText style={{ color: "red", marginBottom: 26 }}>
                  {errors.email}
                </AppText>
              )}

              <TextInput
                style={styles.inputData}
                placeholder="PASSWORD"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry
                onChangeText={handleChange("password")}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
              />
              {touched.password && (
                <AppText style={{ color: "red", marginBottom: 26 }}>
                  {errors.password}
                </AppText>
              )}
              <View
                style={{
                  justifyContent: "flex-start",
                  alignSelf: "flex-start",
                  marginLeft: 42,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ForgotPassword");
                  }}
                >
                  <AppText style={{ fontSize: 14 }}>Forgot Password?</AppText>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <AppButton
                  title="LOG IN"
                  onPress={() => userContext.setUserLogged(true)} // when the form is submitted we will end up on line 46
                />
              </View>
            </View>
          </>
        )}
      </Formik>

      <View>
        <View style={styles.text}>
          <AppText>Dont't have an account?</AppText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <AppText>Create one</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    // marginTop: 50,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  tinyLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 10,
  },
  button: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputData: {
    textDecorationLine: "none",
    width: "80%",
    color: "white",
    borderBottomWidth: 1,
    borderColor: colors.border,
    fontSize: 15,
    borderBottomColor: colors.border,
    marginBottom: 40,
  },
});
