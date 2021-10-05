import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  Linking,
} from "react-native";
import { Icon, Input, Spinner, Text } from "@ui-kitten/components";
import { Image, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./HomeScreen";
import ErrorText from "./ErrorText";
import { AuthContext } from "../components/context";
import Loading from "../components/loading";
import axios from "axios";
import { BASE_URL } from "../api/api";
import Background from "./Background";

export default function LoginScreen({ navigation }) {
  const [email, isEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");

  // const { login } = React.useContext(AuthContext);

  //count data's inside map
  let count = 0;

  const login = async () => {
    console.log("login button is working");
    if (!email || !password) {
      setError("please fill all the fields");
    } else {
      const fetchingData = await axios({
        method: "GET",
        url: `${BASE_URL}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
          pkey: "3fef2657d98325773fe04c95a4aab4be",
        },
      }).then((response) => response.data);
      // console.log(fetchingData);
      for (let item = 0; item < fetchingData.length; item++) {
        count++;
        if (
          fetchingData[item].emailId === email &&
          fetchingData[item].password === password
        ) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        } else if (
          fetchingData[item].emailId !== email &&
          fetchingData[item].password !== password
        ) {
          if (fetchingData.length === count) {
            setError("please check your email or password");
          }
        }
      }
      // if (flag === true) {

      // }
    }
  };
  const register = () => {
    navigation.navigate("Register");
  };

  // const signIn = async () => {
  //   await fetch("https://dev-shanthan.gateway.apiplatform.io/v1/biogreenauth", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       apikey: "hHCtIgbemyckzK8F5QvFpQbA2xSpNhhr",
  //       pkey: "3fef2657d98325773fe04c95a4aab4be",
  //     },
  //   })
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       if (!userName || !password) {
  //         Alert.alert("message", "please enter all fields", [
  //           {
  //             text: "cancel",
  //             style: "cancel",
  //           },
  //           {
  //             text: "ok",
  //           },
  //         ]);
  //       } else if (password.length < 8) {
  //         Alert.alert(
  //           "message",
  //           "password must contain atleast 8 characters long",
  //           [
  //             {
  //               text: "cancel",
  //               style: "cancel",
  //             },
  //             {
  //               text: "ok",
  //             },
  //           ]
  //         );
  //       } else {
  //         data.map((items, id) => {
  //           count++;
  //           if (items.userName === userName && items.password === password) {
  //             return navigation.navigate("Home");
  //           }
  //         });
  //       }
  //     });
  // };

  return (
    <Background>
      <View style={styles.welcomeHead}>
        {/* <Text style={styles.welcome}>Please,</Text> */}
        <Text style={styles.welcome}>Login</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.loginContainer}>
          <StatusBar style="dark" />
          <Loading loading={loading} />

          <Image
            source={require("../image/bioGreen.jpg")}
            style={styles.imgContainer}
          />
          <View style={styles.inputContainer}>
            <ErrorText error={error} />
            <Input
              style={styles.input}
              placeholder="Email"
              autofocus
              type="email"
              value={email}
              size="large"
              keyboardType={"email-address"}
              onChangeText={(text) => isEmail(text)}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              type="password"
              size="large"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={{
                color: "green",
              }}
              containerStyle={styles.button}
              buttonStyle={{
                backgroundColor: "green",
                borderColor: "green",
              }}
              title="Login"
              onPress={() => login()}
              // onPress={async () => {
              //   try {
              //     isLoading(true);
              //     await login(email, password);
              //   } catch (error) {
              //     setError(error.message);
              //     isLoading(false);
              //   }
              // }}
            />
            <Button
              icon={{
                color: "green",
              }}
              containerStyle={styles.button}
              type="outline"
              buttonStyle={{
                borderColor: "green",
              }}
              onPress={() => register()}
              color="green"
              titleStyle={{
                color: "green",
              }}
              title="Register"
            />
          </View>
          <View style={styles.bottomTxt}>
            <Text style={styles.forgot}>
              Forgot Password?
              <Text
                style={styles.resetTxtColor}
                onPress={() =>
                  Linking.openURL("http://btmportfolio.herokuapp.com")
                }
              >
                Reset
              </Text>
            </Text>

            <Text style={styles.resendEmail}>
              Email not recieved?
              <Text
                style={styles.resend}
                onPress={() =>
                  Linking.openURL("http://btmportfolio.herokuapp.com")
                }
              >
                Resend email
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

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

  inputContainer: {
    width: 300,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    marginVertical: 1,
    borderColor: "green",
  },
  imgContainer: {
    width: 200,
    height: 125,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: 150,
    marginTop: 10,
  },
  forgot: {
    marginTop: 10,
  },
  bottomTxt: {
    marginRight: 75,
  },
  resetTxtColor: {
    color: "green",
    fontWeight: "bold",
  },
  resend: {
    color: "red",
    fontWeight: "bold",
  },
});
