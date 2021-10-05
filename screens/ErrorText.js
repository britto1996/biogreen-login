import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ErrorText({ error, success }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
      <Text style={styles.success}>{success}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "red",
    fontWeight: "bold",
  },
  success: {
    color: "green",
    fontWeight: "bold",
  },
});
