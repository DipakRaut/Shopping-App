import React from "react";

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import EditProfile from "../components/EditProfile";
import { useNavigation } from "@react-navigation/native";

import colors from "./colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function Profile() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageCircle}>
            <Image
              style={styles.image}
              source={require("../assets/users/user4.jpg")}
            />
          </View>
          <View style={styles.pencil}>
            <AppText>Jessica Abela</AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <EvilIcons name="pencil" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.firstRow}>
            <View style={styles.individualComponent}>
              <View style={styles.smallImageCircle}>
                <Image
                  style={styles.smallImage}
                  source={require("../assets/levels/level4.jpg")}
                />
              </View>
              <AppText>LEVELS</AppText>
            </View>

            <View style={styles.individualComponent}>
              <View style={styles.smallImageCircle}>
                <AppText style={styles.pointImageCircle}>40</AppText>
              </View>
              <AppText>POINTS</AppText>
            </View>
          </View>

          <View style={styles.firstRow}>
            <View style={styles.individualComponent}>
              <View style={styles.smallImageCircle}>
                <AppText style={styles.pointImageCircle}>52</AppText>
              </View>
              <AppText>MONTHLY RANKING</AppText>
            </View>

            <View style={styles.individualComponent}>
              <View style={styles.smallImageCircle}>
                <AppText style={styles.pointImageCircle}>520</AppText>
              </View>
              <AppText>YEARLY RANKING</AppText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  smallImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
  firstRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  firstRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  smallImageCircle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    color: "blue",
    backgroundColor: "rgb(18, 18, 64)",
    borderWidth: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 20,
  },

  pointImageCircle: {
    fontSize: 40,
  },
  individualComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
  },
  pencil: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {},
        title: "",
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
