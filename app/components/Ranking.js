import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Switch,
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StatusBarScreen from "./StatusBarScreen";
import colors from "./colors";
let temp = 1;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    star: 5440,
    title: "James Johny",
    image: require("../assets/users/user1.jpg"),
    rank: 1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    star: 4440,
    title: "Carl Neon",
    image: require("../assets/users/user2.jpg"),
    rank: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    star: 3440,
    title: "Andrew Johnson",
    image: require("../assets/users/user3.jpg"),
    rank: 3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29o72",
    star: 2440,
    title: "Shaw De",
    image: require("../assets/users/user4.jpg"),
    rank: 4,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29p72",
    star: "1440",
    title: "Simon lee",
    image: require("../assets/users/user5.jpg"),
    rank: 5,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571i29p72",
    star: "1440",
    title: "Simon lee",
    image: require("../assets/users/user5.jpg"),
    rank: 6,
  },
];

const Item = ({ title, image, stars, rank }) => (
  <View>
    <View style={styles.item}>
      <AppText style={{ color: "white", marginRight: 40 }}>{rank}</AppText>

      <Image style={styles.userImage} source={image} />

      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ marginLeft: 10, color: "white" }}>{stars}</Text>
      </View>

      <MaterialCommunityIcons
        style={{ position: "absolute", right: 50 }}
        name="trophy-award"
        size={40}
        color="gold"
      />
    </View>
    <View
      style={{
        height: 1,
        backgroundColor: "gray",
        width: "80%",
        alignSelf: "center",
      }}
    />
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      stars={item.star}
      rank={item.rank}
    />
  );
  // toggle button
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          // alignContent: "stretch",
          justifyContent: "space-between",
        }}
      >
        <AppText>RANKING</AppText>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <AppText style={{ color: "white" }}>Monthly</AppText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <AppText style={{ color: "white" }}>Yearly</AppText>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 25,
  },
});

export default App;
