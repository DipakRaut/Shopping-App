import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../components/colors";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("* Name"),
  email: Yup.string().required().email().label("* Email"),
  password: Yup.string().required().min(4).label("* Passowrd"),
  confirmPassword: Yup.string().required().min(4).label("* ConfirmPassowrd"),
});

function RegisterScreen() {
  const navigation = useNavigation();
  const [boy, setBoy] = useState(false);
  const [girl, setGirl] = useState(false);
  const [other, setOther] = useState(false);

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    console.log("Image" + image);
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileImage}>
            <AppText style={{ fontSize: 10 }}>PROFILE PICTURE</AppText>
            <TouchableOpacity onPress={pickImage}>
              {image === null ? (
                <Image
                  source={require("../assets/camera.png")}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    margin: 15,
                  }}
                />
              ) : (
                <Image
                  source={{ uri: image }}
                  style={{
                    height: 90,
                    width: 90,
                    borderRadius: 45,
                    margin: 15,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.gender}>
            <TouchableOpacity
              onPress={() => {
                setBoy(!boy);
                setGirl(false);
                setOther(false);
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: boy ? "dodgerblue" : "white",
                  margin: 10,
                }}
              >
                <FontAwesome5
                  name="male"
                  size={50}
                  style={{ alignSelf: "center", marginTop: 3 }}
                />
                <AppText style={{ margin: 15 }}>Boy</AppText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setGirl(!girl);
                setBoy(false);
                setOther(false);
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: girl ? "dodgerblue" : "white",
                  margin: 10,
                }}
              >
                <FontAwesome5
                  name="female"
                  size={50}
                  style={{ alignSelf: "center", marginTop: 3 }}
                />
                <AppText style={{ margin: 19 }}>Girl</AppText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setOther(!other);
                setBoy(false);
                setGirl(false);
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: other ? "dodgerblue" : "white",
                  margin: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="human-male"
                  size={60}
                  style={{ alignSelf: "center", marginTop: 3 }}
                />
                <AppText style={{ margin: 9 }}>Other</AppText>
              </View>
            </TouchableOpacity>
          </View>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            // onSubmit={(values) => console.log(values)}
            onSubmit={(value) => {
              if (value.password !== value.confirmPassword) {
                alert("Password did not match, Try once Again");
              } else {
                console.log(value.password);
                register(value);
              }
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View style={{ marginTop: 40 }}>
                  <View style={styles.input}>
                    <TextInput
                      style={styles.inputData}
                      placeholder="NAME"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={() => setFieldTouched("name")}
                      onChangeText={handleChange("name")}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="white"
                    />
                    {touched.name && (
                      <AppText style={{ color: "red", marginBottom: 15 }}>
                        {errors.name}
                      </AppText>
                    )}

                    <TextInput
                      style={styles.inputData}
                      placeholder="EMAIL"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={() => setFieldTouched("email")}
                      onChangeText={handleChange("email")}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="white"
                    />
                    {touched.email && (
                      <AppText style={{ color: "red", marginBottom: 15 }}>
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
                      underlineColorAndroid="transparent"
                      placeholderTextColor="white"
                    />
                    {touched.password && (
                      <AppText style={{ color: "red", marginBottom: 15 }}>
                        {errors.password}
                      </AppText>
                    )}

                    <TextInput
                      style={styles.inputData}
                      placeholder="CONFIRM PASSWORD"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={() => setFieldTouched("confirmPassword")}
                      onChangeText={handleChange("confirmPassword")}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="white"
                      secureTextEntry
                    />
                    {touched.confirmPassword && (
                      <AppText style={{ color: "red", marginBottom: 5 }}>
                        {errors.confirmPassword}
                      </AppText>
                    )}
                  </View>

                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AppButton title="CREATE ACCOUNT" onPress={handleSubmit} />
                  </View>

                  <View style={styles.text}>
                    <AppText>Have an account?</AppText>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <AppText>Log in</AppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
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
  gender: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
