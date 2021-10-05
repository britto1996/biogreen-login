import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Spinner,
  Text,
} from "@ui-kitten/components";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigation/navigation";

const Stack = createNativeStackNavigator();

// const globalScreenOptions = {
//   headerStyle: { backgroundColor: "#8dc63f" },
//   headerTitleStyle: { color: "#112031", fontWeight: "bold" },
//   headerTintColor: { color: "#112031" },
// };

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  );
}
