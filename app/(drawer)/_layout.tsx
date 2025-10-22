import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            drawerLabel: "Dashboard label",
            headerStyle: { backgroundColor: "#7e350d" },
            headerTintColor: "#fff",
            drawerIcon: () => (
              <FontAwesome name="dashboard" size={24} color="#3c39e8" />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings label",
            headerStyle: { backgroundColor: "#ae94cb" },
            headerTintColor: "#fff",
            drawerIcon: () => (
              <FontAwesome name="cog" size={24} color="#3c39e8" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
