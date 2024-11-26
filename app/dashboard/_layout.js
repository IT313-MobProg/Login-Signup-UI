import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          paddingTop: 7,
          margin: 20,
          height: 55,
          borderRadius: 21,
          borderWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "Poppins-Regular",
        },
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={28}
              color="#9e6060"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "message" : "message-outline"}
              size={25}
              color="#9e6060"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={28}
              color="#9e6060"
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
