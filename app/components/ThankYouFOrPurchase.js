import React from "react";
import * as Font from "expo-font";
import { Image, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Button, Card, Title, Paragraph } from "react-native-paper";
import colors from "./colors";

export default function pointImageDisplay({ points, image }) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "center",
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <Card
        style={{
          width: "80%",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="check-circle"
          size={100}
          color="dodgerblue"
          style={{ alignSelf: "center" }}
        />
        <Paragraph style={{ marginBottom: 50 }}>
          Thank You for your purchase!
        </Paragraph>

        <Card.Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>Image Name</Title>
          <Paragraph>Description Of Image</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
