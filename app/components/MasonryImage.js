import React, { useState } from "react";
import MasonryList from "react-native-masonry-list";
import data from "./data";
import { createStackNavigator } from "@react-navigation/stack";
import UserAddressForProduct from "../components/UserAddressForProduct";
import ThankYouFOrPurchase from "../components/ThankYouFOrPurchase";
import pointImageDisplay from "../components/pointImageDisplay";
import { useNavigation } from "@react-navigation/native";
import colors from "./colors";

const Stack = createStackNavigator();
function MansonryImage() {
  const navigation = useNavigation();

  const onPressImage = (value) => {
    navigation.navigate("pointImageDisplay");
  };

  return <MasonryList sorted onPressImage={onPressImage} images={data} />;
}

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {},
        title: "Shop",
      }}
    >
      <Stack.Screen
        name="Shop" // MansonryImage
        component={MansonryImage}
      />
      <Stack.Screen name="ThankYou" component={ThankYouFOrPurchase} />
      <Stack.Screen name="UserAddress" component={UserAddressForProduct} />
      <Stack.Screen name="pointImageDisplay" component={pointImageDisplay} />
    </Stack.Navigator>
  );
};
