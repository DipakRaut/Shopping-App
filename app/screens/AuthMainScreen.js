import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import colors from "../components/colors";
import forgotPassword from "./forgotPassword";
import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";
import resetPassword from "./resetPassword";
import Verification from "./verification";

const Stack = createStackNavigator();

function AuthMainScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: "white",
        headerTitleStyle: {},
        title: "",
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Verification"
        component={Verification}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="ForgotPassword"
        component={forgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="ResetPassword"
        component={resetPassword}
      />
    </Stack.Navigator>
  );
}

export default AuthMainScreen;
