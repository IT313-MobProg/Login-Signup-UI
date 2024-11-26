// This is the Forgot Password screen
// No navigation yet, just plain UI
// Screen for Log In is the "App.js" file
// Screen for Sign Up is called "Signup.js" located in the same directory as this one

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
import { useRouter } from "expo-router";

export default function ForgotPassword({ navigation }) {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
  });

  const router = useRouter();

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
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>
        <Text style={styles.instructions}>
          Please enter the 6-digit PIN sent to your email.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PIN</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your 6-digit PIN"
            keyboardType="numeric"
            maxLength={6}
          />
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => router.replace("/dashboard")}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.rememberedYourPassContainer}>
          <Text style={styles.rememberedYourPass}>
            Remembered your password?
          </Text>
          <TouchableOpacity onPress={() => router.navigate("/")}>
            <Text style={styles.loginLink}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  headerText: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "Poppins-Bold",
  },
  instructions: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    fontFamily: "Poppins-SemiBold",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "Poppins-Regular",
  },
  verifyButton: {
    backgroundColor: "#9e6060",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  rememberedYourPassContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  rememberedYourPass: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  loginLink: {
    color: "#9e6060",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
});
