import { Drawer } from "expo-router/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
        },
        drawerType: "slide",
        drawerActiveTintColor: "#9e6060",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Profile",
          drawerLabelStyle: {
            fontFamily: "Poppins-Regular",
            fontSize: 13,
          },
          title: "My Profile",
          headerStyle: {
            fontFamily: "Poppins-SemiBold",
          },
          drawerIcon: () => <MaterialCommunityIcons name="account" size={15} />,
        }}
      />
      <Drawer.Screen
        name="analytics"
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerLabelStyle: {
            fontFamily: "Poppins-Regular",
            fontSize: 13,
          },
          drawerIcon: () => <MaterialCommunityIcons name="cog" size={15} />,
        }}
      />
    </Drawer>
  );
}
