import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import { BASE_URL } from "../api/api";
import { Spinner } from "@ui-kitten/components";
import { AuthContext } from "../components/context";
import { lightTheme } from "../screens/Theme";
import { sleep } from "../utils/sleep";
import { createAction } from "../utils/createAction";
import StartScreen from "../screens/StartScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  // const auth = React.useMemo(() => ({
  //   login: async (email, password) => {
  //     await sleep(500);
  //     const result = await axios({
  //       method: "POST",
  //       url: `${BASE_URL}`,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
  //         pkey: "3fef2657d98325773fe04c95a4aab4be",
  //       },
  //       data: {
  //         emailId: email,
  //         password: password,
  //       },
  //     }).then((response) => response.data);
  //     console.log(result);
  //   },
  //   logout: () => {},
  //   register: async (
  //     firstName,
  //     lastName,
  //     email,
  //     userName,
  //     mobileNumber,
  //     password,
  //     confirmPassword
  //   ) => {
  //     await sleep(500);
  //     await axios({
  //       method: "POST",
  //       url: `${BASE_URL}`,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
  //         pkey: "3fef2657d98325773fe04c95a4aab4be",
  //       },
  //       data: {
  //         firstName: firstName,
  //         lastName: lastName,
  //         emailId: email,
  //         userName: userName,
  //         phoneNo: mobileNumber,
  //         password: password,
  //         password: confirmPassword,
  //       },
  //     }).then((data) => {
  //       console.log(data);
  //     });
  //   },
  // }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Spinner />
      </View>
    );
  }
  return (
    <NavigationContainer theme={lightTheme}>
      <Navigator initialRouteName={RegisterScreen}>
        <Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Screen
          options={{ headerShown: true }}
          name="Home"
          component={HomeScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
