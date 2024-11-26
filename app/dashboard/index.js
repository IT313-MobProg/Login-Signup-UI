import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to the Home Page</Text>
      <View style={styles.subtextContainer}>
        <Text>More elements to be added soon!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  subtextContainer: {
    marginTop: 4,
  },
  subtext: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
});
