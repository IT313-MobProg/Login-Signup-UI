// This is the Login Screen
// No navigation yet, just plain UI
// Sign Up and Forgot Password screens are located in "screens" folder
// Same exact content as App.js

import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Login() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 25,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    fontFamily: "Inter-SemiBold",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "Poppins-Regular",
  },
  loginButton: {
    backgroundColor: "#9e6060",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  forgotPasswordText: {
    color: "#9e6060",
    fontSize: 14,
    marginBottom: 25,
    fontFamily: "Inter-SemiBold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Inter-Regular",
    marginBottom: 2,
  },
  signUpLink: {
    color: "#9e6060",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
});
