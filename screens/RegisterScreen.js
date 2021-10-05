import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Icon, Input, Text } from "@ui-kitten/components";
import { Button, Image } from "react-native-elements";
import { AuthContext } from "../components/context";
import ErrorText from "./ErrorText";
import Background from "./Background";
import Loading from "../components/loading";
import axios from "axios";
import { BASE_URL } from "../api/api";

export default function RegisterScreen({ navigation }) {
  const [email, isEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [password, setPassword] = useState("");

  // const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // const phnumberRegex = /^([+]\d{2})?\d{10}$/;
  // const passwordStrength = new RegExp(
  //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  // );
  // const { register } = React.useContext(AuthContext);
  const register = async () => {
    console.log("register button is working");
    //fetching api url and posting those data's
    if (!email) {
      setError("Please fill the field");
    } else if (checkEmail.test(email) === false) {
      setError("please enter a valid email");
    } else {
      const posting = await axios({
        method: "POST",
        url: `${BASE_URL}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
          pkey: "3fef2657d98325773fe04c95a4aab4be",
        },
        data: {
          emailId: email,
        },
      }).then((response) => response.data);
      console.log(posting);
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "Login" }],
      // });
    }
  };
  const login = () => {
    setError("");
    navigation.navigate("Login");
  };
  // const register = async () => {
  //   await fetch("https://dev-shanthan.gateway.apiplatform.io/v1/biogreenauth", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
  //       pkey: "3fef2657d98325773fe04c95a4aab4be",
  //     },
  //     body: JSON.stringify({
  //       firstName: firstName,
  //       lastName: lastName,
  //       phoneNo: mobileNumber,
  //       userName: userName,
  //       password: password,
  //       emailId: email,
  //       password: confirmPassword,
  //     }),
  //   })
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       if (
  //         !firstName ||
  //         !lastName ||
  //         !userName ||
  //         !email ||
  //         !mobileNumber ||
  //         !password ||
  //         !confirmPassword
  //       ) {
  //         Alert.alert("message", "please enter all fields", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (userName.length < 3) {
  //         Alert.alert("message", "username must contain atleast 3 characters", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (checkEmail.test(email) === false) {
  //         Alert.alert("message", "please enter a valid email", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (!mobileNumber.match(/^([+]\d{2})?\d{10}$/)) {
  //         Alert.alert("message", "please enter a valid number", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (password.length < 8) {
  //         Alert.alert("message", "password must contain atleast 8 characters", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (password !== confirmPassword) {
  //         Alert.alert("message", "check your password", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else {
  //         navigation.navigate("Home");
  //       }
  //     });
  // };

  // const login = () => {
  //   navigation.navigate("Login");
  // };

  return (
    <Background>
      <View style={styles.welcomeHead}>
        {/* <Text style={styles.welcome}>Hi,</Text> */}
        <Text style={styles.welcome}>Register</Text>
      </View>
      <View style={styles.registerContainer}>
        <Loading loading={loading} />

        <Image
          source={require("../image/bioGreen.jpg")}
          style={styles.imgContainer}
        />

        <View style={styles.inputContainer}>
          {/* <Text style={styles.accountHeader}>Create Account</Text> */}
          <ErrorText error={error} />
          <Input
            style={styles.input}
            placeholder="Email"
            autoFocus
            keyboardType={"email-address"}
            type="email"
            size="large"
            value={email}
            onChangeText={(text) => isEmail(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon={{
              color: "green",
            }}
            buttonStyle={{
              backgroundColor: "green",
              borderColor: "green",
            }}
            onPress={() => register()}
            // onPress={async () => {
            //   try {
            //     isLoading(true);
            //     await register(
            //       firstName,
            //       lastName,
            //       email,
            //       userName,
            //       mobileNumber,
            //       password,
            //       confirmPassword
            //     );
            // navigation.pop();
            // navigation.navigate("Login");
            // isLoading(false);
            // } catch (error) {
            //   setError(error.message);
            //   isLoading(false);
            // }
            // }}
            containerStyle={styles.button}
            title="Register"
          />
          <Button
            icon={{
              color: "green",
            }}
            buttonStyle={{
              borderColor: "green",
            }}
            onPress={() => login()}
            type="outline"
            containerStyle={styles.button}
            titleStyle={{
              color: "green",
            }}
            title="Login"
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  welcomeHead: {
    position: "absolute",
    top: 60,
    left: 10,
  },

  welcome: {
    color: "#fff",
    textAlign: "left",
    fontSize: 36,
    fontWeight: "bold",
  },

  imgContainer: {
    width: 200,
    height: 100,
  },

  rowContainer: {
    display: "flex",
    flexDirection: "row",
  },

  registerContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // accountHeader: {
  //   fontSize: 25,
  // },

  inputContainer: {
    width: 300,
  },

  input: {
    width: "100%",
    borderRadius: 8,
    borderColor: "green",
    alignItems: "center",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    width: 150,
    marginTop: 10,
  },
});
