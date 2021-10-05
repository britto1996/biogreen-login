import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Background({ children }) {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.logoContainer}>
        {/* <Image
          source={require("../image/bioGreen.jpg")}
          style={styles.logo}
        ></Image> */}
      </View>

      <View style={styles.svgViewContainer}>
        <View style={styles.svgContainer}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 1400 360"
            style={{ position: "relative", top: 100 }}
          >
            <Path
              fill="green"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
        {children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },

  //   logoContainer: {
  //     position: "absolute",
  //     right: 60,
  //     top: 60,
  //     elevation: 4,
  //   },

  svgViewContainer: {
    position: "absolute",
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    height: "90%",
  },

  svgContainer: {
    backgroundColor: "green",
    height: 125,
  },

  logo: {
    width: 80,
    height: 80,
  },
});
