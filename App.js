import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./app/screens/MainScreen";
import AuthContext from "./app/config/AuthContext";
import AuthMainScreen from "./app/screens/AuthMainScreen";
import AppStatusModal from "./app/components/AppStatusModal";
export default function App() {
  const [isUserLogged, setUserLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserLogged, setUserLogged }}>
      <NavigationContainer>
        {isUserLogged ? <MainScreen /> : <AuthMainScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
