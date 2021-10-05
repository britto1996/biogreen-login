import { Button } from "@ui-kitten/components";
import React from "react";
import { View, Text, Alert } from "react-native";
import { AuthContext } from "../components/context";

export default function HomeScreen({ navigation }) {
  let count = 0;

  const signOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  // fetch("https://dev-shanthan.gateway.apiplatform.io/v1/biogreenauth", {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
  //     pkey: "3fef2657d98325773fe04c95a4aab4be",
  //   },
  // })
  //   .then((responce) => responce.json())
  //   .then((data) => {
  //     Alert.alert("Message", `Welcome to biogreen`, [
  //       {
  //         text: "ok",
  //       },
  //     ]);
  //   });

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => signOut()}>Logout</Button>
    </View>
  );
}
