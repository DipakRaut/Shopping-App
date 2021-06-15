import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import QRScreen from "./QRScreen";
import MasonryImage from "../components/MasonryImage";
import RankingScreen from "../components/Ranking";
import { createStackNavigator } from "@react-navigation/stack";
import ItemDetailScreen from "../components/ItemDetailScreen";
import Profile from "../components/Profile";
import PointsChart from "../components/pointsChart";
import AppStatusModal from "../components/AppStatusModal";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <AppStatusModal />
      <Tab.Navigator
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            console.log(color);
            switch (route.name) {
              case "HomeScreen": {
                return <Ionicons name="grid-outline" size={24} color={color} />;
              }
              case "QR Code": {
                return (
                  <MaterialCommunityIcons
                    name="image-filter-center-focus-strong-outline"
                    size={24}
                    color={color}
                  />
                );
              }
              case "Ranking": {
                return <AntDesign name="Trophy" size={24} color={color} />;
              }
              case "Cart": {
                return (
                  <AntDesign name="shoppingcart" size={24} color={color} />
                );
              }
            }
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#01011f",
          },
          activeTintColor: "#d93069",
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="QR Code"
          component={QRScreen}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={RankingScreen}
          options={{
            title: "",
          }}
        />
        <Tab.Screen
          name="Cart"
          component={MasonryImage} //Mansory
          options={{
            title: "",
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const Stack = createStackNavigator();

function MainScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        options={{
          headerShown: false,
        }}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DetailScreen"
        component={ItemDetailScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProfileScreen"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="PointsChart"
        component={PointsChart}
      />
    </Stack.Navigator>
  );
}

export default MainScreen;
