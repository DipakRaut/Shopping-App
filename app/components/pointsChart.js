import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import AppText from "./AppText";
import colors from "./colors";
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
// star=points and points=1K
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

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.points} image={item.image} stars={item.temp} />
  );

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // alignContent: "stretch",
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // marginTop: StatusBar.currentHeight || 0,
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
});

export default App;
