import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import StatusBarScreen from "./StatusBarScreen";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import colors from "./colors";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    points: "100",
    temp: "POINTS",
    image: require("../assets/levels/level1.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    points: "500",
    temp: "POINTS",
    image: require("../assets/levels/level2.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    points: "1K",
    temp: "POINTS",
    image: require("../assets/levels/level3.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29o72",
    points: "5K",
    temp: "POINTS",
    image: require("../assets/levels/level4.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29p72",
    points: "10K",
    temp: "POINTS",
    image: require("../assets/levels/level5.jpg"),
  },
];

// for Modal
const Item = ({ title, image, stars }) => (
  <View>
    <View style={styles.item}>
      <Image style={styles.userImage} source={image} />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: 55,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "white" }}>{stars}</Text>
      </View>
    </View>
    <AppText
      style={{
        fontSize: 16,
        marginBottom: 10,
        paddingLeft: 40,
        paddingRight: 32,
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem is
    </AppText>
    <View
      style={{
        height: 1,
        backgroundColor: "dodgerblue",
        width: "80%",
        alignSelf: "center",
      }}
    />
  </View>
);
function AppStatusBar(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const renderItem = ({ item }) => (
    <Item title={item.points} image={item.image} stars={item.temp} />
  );

  return (
    <View style={styles.upperComponent}>
      {/* <StatusBar style="light" /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileScreen");
        }}
      >
        <Image style={styles.logo} source={require("../assets/profile.png")} />
      </TouchableOpacity>
      <AppText style={styles.name}>David W</AppText>
      <View style={styles.pointComponent}>
        <View style={styles.points}>
          <AppText>Points</AppText>
          <AppText>45</AppText>
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <Image
            style={styles.pointsLogo}
            source={require("../assets/levels/level3.jpg")}
          />
        </TouchableOpacity>

        <Modal transparent={true} visible={visible}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.close}>
              <MaterialCommunityIcons
                onPress={() => setVisible(false)}
                name="close"
                size={40}
              />
            </TouchableOpacity>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "space-between",
                }}
              ></View>

              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
export default AppStatusBar;
const styles = StyleSheet.create({
  upperComponent: {
    width: "100%",
    height: 90,
    backgroundColor: colors.background,
    flexDirection: "row",
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    alignSelf: "center",
  },
  points: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    alignSelf: "center",
    marginLeft: 60, // not set properly
  },
  pointsLogo: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  pointComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: "hidden",
    margin: 10,
    borderRadius: 30,
  },
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 25,
  },
  close: {
    backgroundColor: "white",
    width: "10%",
    overflow: "hidden",
    alignSelf: "flex-end",
    right: 0,
    marginRight: 10,
    marginTop: 5,
  },
});
