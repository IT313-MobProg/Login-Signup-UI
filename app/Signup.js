// This is the Sign Up Screen
// No navigation yet, just plain UI
// Screen for Log In is the "App.js" file
// Screen for Forgot Password is called the "ForgotPassword.js" file located in the same directory as this one

import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Signup({ navigation }) {
  const [gender, setGender] = useState("Male");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const router = useRouter();

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
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <Text style={styles.headerText}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} placeholder="Enter first name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} placeholder="Enter last name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Enter username" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Birthday</Text>
          <TextInput style={styles.input} placeholder="YYYY-MM-DD" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              style={styles.picker}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
        </View>

        <View
          style={[
            styles.termsContainer,
            { alignItems: "center", alignSelf: "flex-start" },
          ]}
        >
          <TouchableOpacity
            style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}
            onPress={() => setTermsAccepted(!termsAccepted)}
          >
            {termsAccepted && <Text style={styles.checkboxText}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I accept the{" "}
            <Text
              style={styles.linkText}
              onPress={() => console.log("Terms pressed")}
            >
              terms
            </Text>{" "}
            and{" "}
            <Text
              style={styles.linkText}
              onPress={() => console.log("Privacy policy pressed")}
            >
              privacy policy
            </Text>
            .
          </Text>
        </View>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => router.replace("/dashboard")}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.alrHaveAnAccContainer}>
          <Text style={styles.alreadyHaveAnAcc}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.navigate("/")}>
            <Text style={styles.loginLink}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    marginTop: 25,
    marginBottom: 30,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 21,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
    fontFamily: "Inter-SemiBold",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontFamily: "Inter-Regular",
    fontSize: 15,
  },
  pickerContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 3,
    marginBottom: 50,
    alignSelf: "flex-start",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#000000",
  },
  checkboxText: {
    color: "#fff",
    fontSize: 10,
  },
  termsText: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Inter-Regular",
  },
  linkText: {
    color: "#9e6060",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#9e6060",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
  alrHaveAnAccContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  alreadyHaveAnAcc: {
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
