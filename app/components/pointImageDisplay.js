import React, { useState, useEffect } from "react";
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

import AppButton from "../components/AppButton";

import { Card, Title, Paragraph } from "react-native-paper";
import colors from "./colors";
import { useNavigation } from "@react-navigation/native";

export default function pointImageDisplay({ points, image }) {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
          flex: 1,
        }}
      >
        <Card style={{ width: "80%", borderRadius: 20 }}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Title title="Image Name" subtitle="Description About Image" />
          <Card.Content>
            <Title>{points}</Title>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Paragraph>
          </Card.Content>

          <Card.Actions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppButton
              title="BUY NOW"
              onPress={() => {
                navigation.navigate("UserAddress");
              }}
            />
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}
