import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-reguler": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return <Home />;
}
