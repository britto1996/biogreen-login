import { Spinner } from "@ui-kitten/components";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Loading({ loading }) {
  if (!loading) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View>
        <Spinner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "center",
  },
});
