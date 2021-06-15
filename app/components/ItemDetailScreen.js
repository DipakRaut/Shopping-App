import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import ResponseButton from "../components/ResponseButton";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import DetailScreenMediaCard from "./DetailScreenMediaCard";

function ItemDetailScreen(props) {
  const [isLiked, setLiked] = useState(false);
  const [isDisliked, setDisliked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={require("../assets/shoe.jpg")}
      >
        <AntDesign
          style={{
            marginTop: Constants.statusBarHeight,
            left: 15,
          }}
          onPress={() => {
            navigation.goBack();
          }}
          name="arrowleft"
          size={30}
          color="white"
        />
        <LinearGradient
          colors={["transparent", "#01011f"]}
          style={styles.gradientView}
        >
          <View style={styles.textContainer}>
            <Text style={[styles.textColor, { fontSize: 30 }]}>
              Nike Joyride
            </Text>
            <Text style={[styles.textColor, { fontSize: 18 }]}>
              Lorem Ipsum dolor sit amet
            </Text>
            <Text style={styles.textColor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={styles.likeDislike}>
          <ResponseButton
            value={isLiked}
            color="#84ff88"
            listener={() => {
              setLiked(!isLiked);
              setDisliked(false);
            }}
          >
            {isLiked ? (
              <AntDesign name="like1" size={24} color="#84ff88" />
            ) : (
              <AntDesign name="like2" size={24} color="white" />
            )}
          </ResponseButton>
          <ResponseButton
            value={isDisliked}
            color="#ff4040"
            listener={() => {
              setDisliked(!isDisliked);
              setLiked(false);
            }}
          >
            {isDisliked ? (
              <AntDesign name="dislike1" size={24} color="#ff4040" />
            ) : (
              <AntDesign name="dislike2" size={24} color="white" />
            )}
          </ResponseButton>
        </View>
        <View style={styles.mediaContainer}>
          <DetailScreenMediaCard />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  gradientView: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 8,
  },

  textColor: {
    color: "white",
    margin: 3,
  },

  mediaContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-end",
  },

  likeDislike: {
    flexDirection: "row",
  },

  textContainer: {
    width: "90%",
  },

  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  bottomView: {
    flex: 1,
    backgroundColor: "#01011f",
  },
});

export default ItemDetailScreen;
